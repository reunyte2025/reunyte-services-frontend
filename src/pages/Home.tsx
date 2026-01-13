'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';

const Home: React.FC = () => {
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);
  const section2CanvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Hero Section Three.js Setup
  useEffect(() => {
    if (!heroCanvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: heroCanvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 100;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const alphas = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sizes[i] = Math.random() * 1.3 + 0.5;
      alphas[i] = Math.random() * 0.3 + 0.3;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    starGeometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

    const starMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float size;
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }`,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float strength = 1.0 - (dist * 2.0);
          gl_FragColor = vec4(1.0, 1.0, 1.0, strength * vAlpha * 0.45);
        }`
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const createOrb = (size: number, x: number, y: number, z: number, radialBlur: number) => {
      const orbGeometry = new THREE.SphereGeometry(size, 64, 64);
      const orbMaterial = new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          centerColor: { value: new THREE.Color('#407BFF') },
          edgeColor: { value: new THREE.Color('#314D8C') },
          radialBlur: { value: radialBlur },
          time: { value: 0 },
          radius: { value: size }
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `
          uniform vec3 centerColor;
          uniform vec3 edgeColor;
          uniform float radialBlur;
          uniform float time;
          uniform float radius;
          varying vec3 vPosition;
          varying vec3 vNormal;
          void main() {
            float dist = length(vPosition) / radius;
            float gradientPoint = mix(0.2, 0.7, radialBlur / 100.0);
            vec3 color = mix(centerColor, edgeColor, smoothstep(gradientPoint, 1.0, dist));
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
            float centerGlow = 1.0 - smoothstep(0.0, 0.5, dist);
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            float alpha = mix(0.85, 0.25, dist) + centerGlow * 0.5 + fresnel * 0.6;
            alpha *= pulse * (radialBlur / 100.0);
            gl_FragColor = vec4(color, alpha * 0.9);
          }`
      });

      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(x, y, z);
      scene.add(orb);
      return { mesh: orb, material: orbMaterial, initialX: x, initialY: y, speed: 0.0005 };
    };

    const orbs = [
      createOrb(1.6, 12, 4.5, -1.5, 60),
      createOrb(0.8, -6.5, -4, -3, 40),
      createOrb(1.3, -1.5, 0.2, -3.5, 40),
      createOrb(0.8, 3.5, 1.8, -2.8, 50),
      createOrb(2.1, 0.1, -5.3, -1.9, 50)
    ];

    let time = 0;
    const animate = () => {
      const frameId = requestAnimationFrame(animate);
      time += 0.01;

      stars.rotation.y += 0.0001;
      const alphasAttr = starGeometry.attributes.alpha;
      const alphasArray = alphasAttr.array as Float32Array;
      for (let i = 0; i < alphasArray.length; i++) {
        alphasArray[i] = Math.sin(time * 0.08 + i * 0.08) * 0.15 + 0.35;
      }
      alphasAttr.needsUpdate = true;

      orbs.forEach((orb, i) => {
        const offset = i * Math.PI * 0.4;
        orb.material.uniforms.time.value = time;
        
        const targetX = orb.initialX + mouseRef.current.x * 0.4;
        const targetY = orb.initialY + mouseRef.current.y * 0.3 * 0.3;
        
        orb.mesh.position.x += (targetX - orb.mesh.position.x) * 0.02;
        orb.mesh.position.y += (targetY - orb.mesh.position.y) * 0.02;
        orb.mesh.position.y += Math.sin(time * orb.speed * 2.5 + offset) * 0.001;
        orb.mesh.position.x += Math.cos(time * orb.speed * 2 + offset) * 0.0008;
        
        const scale = 1 + Math.sin(time * 0.05 + offset) * 0.03;
        orb.mesh.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
      return frameId;
    };

    const frameId = animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      orbs.forEach(o => {
        o.mesh.geometry?.dispose();
        o.material?.dispose();
      });
    };
  }, []);

  // Section 2 Three.js Animation for Orb Images
  useEffect(() => {
    if (!section2CanvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: section2CanvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const createFloatingOrb = (x: number, y: number, z: number, speed: number) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x407BFF, 
        transparent: true, 
        opacity: 0 
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return { mesh, initialX: x, initialY: y, speed };
    };

    const floatingOrbs = [
      createFloatingOrb(0, 3, -2, 0.0008),
      createFloatingOrb(4, 0, -3, 0.0006),
      createFloatingOrb(-3, -2, -2.5, 0.0007),
      createFloatingOrb(2, -1, -2, 0.0009),
      createFloatingOrb(-2, 2, -3, 0.0005),
    ];

    let time = 0;
    const animate = () => {
      const frameId = requestAnimationFrame(animate);
      time += 0.01;

      floatingOrbs.forEach((orb, i) => {
        const offset = i * Math.PI * 0.5;
        orb.mesh.position.y = orb.initialY + Math.sin(time * orb.speed * 3 + offset) * 0.3;
        orb.mesh.position.x = orb.initialX + Math.cos(time * orb.speed * 2 + offset) * 0.2;
        
        const scale = 1 + Math.sin(time * 0.04 + offset) * 0.1;
        orb.mesh.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
      return frameId;
    };

    const frameId = animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      floatingOrbs.forEach(o => {
        o.mesh.geometry?.dispose();
        (o.mesh.material as THREE.Material)?.dispose();
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <canvas ref={heroCanvasRef} className="absolute inset-0 w-full h-full" />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                We work to find the best solutions to some of the world's problems
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-10">
                Luminiore: Where ingenuity meets practicality.
              </p>
              
              <button className="group flex items-center gap-2 sm:gap-3 px-8 sm:px-12 lg:px-20 py-2.5 sm:py-3 border-2 border-blue-500 text-white text-base sm:text-lg font-bold rounded-md hover:bg-blue-500 transition-all duration-300">
                Get in touch
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-[70%] sm:w-[35%] md:w-[30%] h-[50%] sm:h-[55%] md:h-[60%] z-10 pointer-events-none">
          <div className="relative w-full h-full">
            <Image 
              src="/assets/images/herosection.png" 
              alt="Developer coding" 
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 768px) 35vw, 30vw"
              className="object-contain object-center opacity-60"
              style={{ objectPosition: 'center bottom' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Unveiling the Genius Section */}
      <section className="relative w-full min-h-screen overflow-hidden" style={{
        background: 'radial-gradient(ellipse at center, #3771C8 0%, #2856A3 22%, #112C6A 100%)'
      }}>
        {/* Three.js Canvas for subtle animation */}
        <canvas ref={section2CanvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

        {/* ORB IMAGES - Repositioned for all devices */}
        {/* Orb 1 - Top center */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-slow"
          style={{
            top: '-7%',
            left: '51%',
            transform: 'translateX(-50%)',
            width: 'clamp(120px, 20vw, 300px)',
            height: 'clamp(150px, 20vw, 300px)',
          }}
        > 
          <Image 
            src="/assets/images/orb1.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 300px"
            className="object-contain opacity-80"
          />
        </div>

        {/* Orb 2 - Right top corner */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-medium"
          style={{
            top: '-4%',
            right: '-5%',
            width: 'clamp(100px, 15vw, 150px)',
            height: 'clamp(100px, 15vw, 250px)',
          }}
        >
          <Image 
            src="/assets/images/orb2.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 30vw, (max-width: 1024px) 15vw, 250px"
            className="object-contain opacity-80"
          />
        </div>

        {/* Orb 3 - Behind heading (left side) */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-fast"
          style={{
            top: '22%',
            left: '5%',
            width: 'clamp(100px, 12vw, 200px)',
            height: 'clamp(100px, 12vw, 200px)',
          }}
        >
          <Image 
            src="/assets/images/orb3.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 30vw, (max-width: 1024px) 15vw, 200px"
            className="object-contain opacity-70"
          />
        </div>

        {/* Orb 4 - Right side middle */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-slow"
          style={{
            top: '50%',
            right: '45%',
            width: 'clamp(130px, 18vw, 150px)',
            height: 'clamp(130px, 18vw, 150px)',
          }}
        >
          <Image 
            src="/assets/images/orb4.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 35vw, (max-width: 1024px) 18vw, 220px"
            className="object-contain opacity-75"
          />
        </div>

        {/* Orb 5 - Bottom left */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-medium"
          style={{
            bottom: '-10%',
            left: '0%',
            width: 'clamp(140px, 15vw, 220px)',
            height: 'clamp(140px, 20vw, 250px)',
          }}
        >
          <Image 
            src="/assets/images/orb5.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 250px"
            className="object-contain opacity-80"
          />
        </div>

        {/* Orb 6 - Bottom center (half cut) */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-fast"
          style={{
            bottom: '-18%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(150px, 20vw, 180px)',
            height: 'clamp(150px, 20vw, 250px)',
          }}
        >
          <Image 
            src="/assets/images/orb6.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 250px"
            className="object-contain opacity-80"
          />
        </div>

        {/* Orb 7 - Bottom center (half cut) */}
        <div 
          className="absolute pointer-events-none z-10 animate-float-fast"
          style={{
            bottom: '-4%',
            left: '85%',
            transform: 'translateX(-50%)',
            width: 'clamp(150px, 20vw, 150px)',
            height: 'clamp(150px, 20vw, 250px)',
          }}
        >
          <Image 
            src="/assets/images/orb3.png" 
            alt="" 
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 250px"
            className="object-contain opacity-80"
          />
        </div>

        {/* Content - Higher z-index, centered */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            <div className="flex-1 max-w-xl w-full text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-10">
                Unveiling the Genius
              </h2>
              
              <p className="text-base sm:text-2xl font-Poppins text-gray-200 mb-3 sm:mb-10">
                Ever wonder what drives our innovative spirit at Luminar?
              </p>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-15">
                It's our commitment to tackling complex challenges head-on. We embrace creative thinking and explore new possibilities to deliver exceptional results
              </p>
              
              <button className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-15 py-2.5 sm:py-3 bg-blue-500 text-white text-base sm:text-lg font-Poppins rounded-md hover:bg-blue-600 transition-all duration-300">
                Learn more...
                <svg className="w-5 h-5 sm:w-9 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 9l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 relative w-full max-w-2xl h-[75vh] sm:h-[75vh] lg:h-[70vh]">
              <div className="relative w-full h-60 mb-6 rounded-[28px] overflow-hidden border-4 border-blue-400/50 shadow-2xl bg-black/20 lg:absolute lg:top-0 lg:right-40 lg:w-[75%] lg:h-[65%] lg:mb-0 lg:z-20">
              <Image
              src="/assets/images/employees1.png"
              alt="Team meeting"
              fill
              sizes="(max-width: 1024px) 92vw, 35vw"
              className="object-cover"/>
              </div>

              <div className="relative w-full h-60 rounded-[28px] overflow-hidden border-4 border-blue-400/50 shadow-2xl bg-black/20lg:absolute lg:top-60 lg:left-50 lg:w-[75%] lg:h-[65%] lg:z-30">
                <Image 
                  src="/assets/images/employees2.png" 
                  alt="Office workspace"
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Add custom CSS animations */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) translateX(-50%);
            }
            50% {
              transform: translateY(-20px) translateX(-50%);
            }
          }

          @keyframes float-medium {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes float-fast {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-25px);
            }
          }

          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }

          .animate-float-medium {
            animation: float-medium 5s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home;