// About.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CircleOrbs from '../components/CircleOrbs';

// ─── Perfect Sphere Decoration ───────────────────────────────────────────────
// Uses explicit px width+height — never a percentage — so spheres stay circular
const Sphere: React.FC<{
  size: number;
  color: string;
  opacity?: number;
  className?: string;
}> = ({ size, color, opacity = 0.18, className = '' }) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      minWidth: `${size}px`,
      minHeight: `${size}px`,
      borderRadius: '50%',
      background: `radial-gradient(circle at 35% 32%, ${color}dd 0%, ${color}55 45%, transparent 75%)`,
      opacity,
      flexShrink: 0,
    }}
  />
);

// ─── Leadership Data ────────────────────────────────────────────────────────
const DIRECTORS = [
  {
    role: 'Chief Executive Officer',
    abbr: 'CEO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 7.8-8 9 .8 5.4 4.2 9 8 10 3.8-1 7.2-4.6 8-10-3-1.2-6.8-3.6-8-9z" />
      </svg>
    ),
    responsibilities: [
      'Sets the overall vision, mission, and long-term strategy',
      'Leads executive decisions and stakeholder relationships',
      'Drives company-wide growth, culture, and innovation',
    ],
    accent: '#3B82F6',
  },
  {
    role: 'Chief Operating Officer',
    abbr: 'COO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    responsibilities: [
      'Oversees day-to-day operations and cross-team execution',
      'Streamlines workflows, processes, and resource allocation',
      'Bridges strategic goals with operational delivery',
    ],
    accent: '#8B5CF6',
  },
  {
    role: 'Chief Marketing Officer',
    abbr: 'CMO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75" />
      </svg>
    ),
    responsibilities: [
      'Shapes brand identity, positioning, and market presence',
      'Leads growth campaigns, digital strategy, and content',
      'Drives customer acquisition, retention, and engagement',
    ],
    accent: '#EC4899',
  },
  {
    role: 'Chief Technology Officer',
    abbr: 'CTO',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    responsibilities: [
      'Architects the technical vision and product roadmap',
      'Leads engineering teams and evaluates emerging technologies',
      'Ensures platform scalability, security, and performance',
    ],
    accent: '#10B981',
  },
];

// ─── Team Roles Data ─────────────────────────────────────────────────────────
const TEAM_ROLES = [
  {
    department: 'Engineering',
    roles: [
      { title: 'Full Stack Developer', desc: 'Builds end-to-end features across frontend and backend systems' },
      { title: 'Backend Engineer', desc: 'Designs APIs, databases, and server-side architecture' },
      { title: 'Frontend Engineer', desc: 'Crafts pixel-perfect, responsive user interfaces' },
      { title: 'DevOps Engineer', desc: 'Manages CI/CD pipelines, infrastructure, and deployments' },
    ],
    color: '#3B82F6',
  },
  {
    department: 'Product & Design',
    roles: [
      { title: 'Product Manager', desc: 'Owns the product roadmap and aligns business goals with user needs' },
      { title: 'UI/UX Designer', desc: 'Creates intuitive designs and seamless user experiences' },
      { title: 'QA Engineer', desc: 'Ensures product quality through systematic testing and automation' },
    ],
    color: '#8B5CF6',
  },
  {
    department: 'Growth & Marketing',
    roles: [
      { title: 'Digital Marketing Specialist', desc: 'Drives online campaigns, SEO, and performance marketing' },
      { title: 'Content Strategist', desc: 'Creates compelling narratives across all brand touchpoints' },
      { title: 'Business Development', desc: 'Identifies partnerships and opens new market opportunities' },
    ],
    color: '#EC4899',
  },
];

// ─── Story Milestones ────────────────────────────────────────────────────────
// Past years use status: 'done'. Future years are explicitly framed as goals/vision
// so the timeline stays honest rather than claiming achievements that haven't happened yet.
const MILESTONES = [
  {
    year: '2025',
    title: 'Foundation',
    desc: 'Reunyte Services LLP was founded in Mumbai with a simple idea — bring technology, creative, and business strategy together under one roof for startups and growing businesses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    color: '#3B82F6',
    status: 'done',
  },
  {
    year: '2026',
    title: 'Building the Core Team',
    desc: 'Growing into a close-knit team of 15-20 specialists across engineering, design, and strategy — and delivering our first projects across web, app, and brand development.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: '#8B5CF6',
    status: 'done',
  },
  {
    year: '2027',
    title: 'Scaling Our Impact',
    desc: 'Our goal: expand into education and corporate training at scale, deepen our design & development capabilities, and grow a loyal client base across India.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: '#EC4899',
    status: 'goal',
  },
  {
    year: '2028',
    title: 'A Trusted Name',
    desc: 'Our vision: be recognized as a genuine, dependable multi-domain partner for startups and institutions — known for quality work, not just quick delivery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: '#10B981',
    status: 'goal',
  },
];

const About: React.FC = () => {
  return (
    <div className="relative w-full overflow-x-hidden font-['Poppins']">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-screen pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: '#0A2540' }}
      >
        {/* Fixed-size spheres — no flex/grid distortion */}
        <Sphere size={320} color="#3B82F6" opacity={0.20} className="top-[6%] left-[-80px]" />
        <Sphere size={200} color="#8B5CF6" opacity={0.16} className="top-[10%] right-[4%]" />
        <Sphere size={130} color="#60A5FA" opacity={0.14} className="bottom-[18%] right-[10%]" />
        <Sphere size={90}  color="#3B82F6" opacity={0.12} className="bottom-[28%] left-[6%]" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Discover Our Identity
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                Reunyte is a team of passionate engineers and specialists dedicated to crafting ingenious solutions for real-world challenges. We combine cutting-edge expertise with a collaborative spirit to deliver impactful results for our clients.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 px-8 py-3 border-2 border-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  Get in touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="relative w-full h-[500px] sm:h-[580px] lg:h-[640px] flex items-center justify-center">
              <div
                className="absolute border-2 border-blue-400 rounded-[2rem] pointer-events-none z-20"
                style={{
                  width: 'clamp(280px, 80%, 480px)',
                  height: 'clamp(420px, 75%, 620px)',
                  top: '50%',
                  left: '55%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <div
                className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10"
                style={{
                  width: 'clamp(280px, 80%, 480px)',
                  height: 'clamp(420px, 75%, 620px)',
                }}
              >
                <Image
                  src="/assets/about/teamemployee.png"
                  alt="Team collaboration"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Section ─────────────────────────────────────────── */}
      <section
        className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #3771C8 0%, #082F87 40%, #112C6A 100%)' }}
      >
        <Sphere size={280} color="#3B82F6" opacity={0.14} className="top-[-60px] left-[8%]" />
        <Sphere size={180} color="#8B5CF6" opacity={0.13} className="top-[20%] right-[-45px]" />
        <Sphere size={120} color="#60A5FA" opacity={0.11} className="bottom-[8%] left-[22%]" />
        <Sphere size={220} color="#3B82F6" opacity={0.09} className="bottom-[-55px] right-[14%]" />

        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="mb-16 lg:mb-24">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Who Leads Us</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Poppins'] font-bold text-white leading-tight">
              The{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #60A5FA, #A78BFA)' }}>
                Leadership
              </span>{' '}
              Behind
              <br className="hidden sm:block" /> Every Decision
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-blue-400 to-purple-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {DIRECTORS.map((director, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-px overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg, ${director.accent}44, transparent 60%)` }}
              >
                <div className="relative rounded-2xl bg-[#0B1E3D]/80 backdrop-blur-md p-6 h-full flex flex-col gap-5">
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: director.accent }}
                  />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${director.accent}22`, color: director.accent, border: `1px solid ${director.accent}44` }}
                  >
                    {director.icon}
                  </div>
                  <div>
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2"
                      style={{ backgroundColor: `${director.accent}22`, color: director.accent }}
                    >
                      {director.abbr}
                    </span>
                    <h3 className="text-lg font-semibold text-white leading-snug">{director.role}</h3>
                  </div>
                  <div className="h-px w-full" style={{ backgroundColor: `${director.accent}30` }} />
                  <ul className="space-y-2.5 flex-1">
                    {director.responsibilities.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: director.accent }} />
                        <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Roles Section ──────────────────────────────────────────── */}
      <section
        className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: '#0A1628' }}
      >
        <Sphere size={260} color="#8B5CF6" opacity={0.12} className="top-[4%] right-[-40px]" />
        <Sphere size={160} color="#3B82F6" opacity={0.11} className="top-[52%] left-[-30px]" />
        <Sphere size={200} color="#EC4899" opacity={0.09} className="bottom-[-50px] right-[18%]" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          {[20, 45, 70].map((top) => (
            <div key={top} className="absolute w-full h-px bg-white" style={{ top: `${top}%` }} />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="mb-16 lg:mb-20">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Our People</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Poppins'] font-bold text-white leading-tight">
              Built by{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #34D399, #60A5FA)' }}>
                Specialists,
              </span>
              <br className="hidden sm:block" /> Driven by Purpose
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-emerald-400 to-blue-400" />
          </div>

          <div className="space-y-10">
            {TEAM_ROLES.map((dept, di) => (
              <div key={di}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-2 h-8 rounded-full shrink-0" style={{ backgroundColor: dept.color }} />
                  <h3 className="text-white font-semibold text-lg tracking-wide">{dept.department}</h3>
                  <div className="flex-1 h-px opacity-20" style={{ backgroundColor: dept.color }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {dept.roles.map((role, ri) => (
                    <div
                      key={ri}
                      className="relative rounded-xl p-px overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${dept.color}30, transparent)` }}
                    >
                      <div className="rounded-xl bg-[#0D1F38]/90 backdrop-blur-sm px-5 py-4 h-full">
                        <div className="h-0.5 w-8 rounded-full mb-4" style={{ backgroundColor: dept.color }} />
                        <p className="text-white font-semibold text-sm mb-2">{role.title}</p>
                        <p className="text-slate-400 text-xs leading-relaxed">{role.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className="mt-20 rounded-2xl p-px overflow-hidden"
            style={{ background: 'linear-gradient(90deg, #3B82F633, #8B5CF633, #3B82F633)' }}
          >
            <div className="rounded-2xl bg-[#0D1F38]/80 backdrop-blur-sm px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white font-semibold text-xl mb-1">Want to be part of the team?</p>
                <p className="text-slate-400 text-sm">We're always looking for talented people who share our passion.</p>
              </div>
              <Link href="/contact">
                <button className="shrink-0 inline-flex items-center gap-3 px-7 py-3 border-2 border-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story — Redesigned as Timeline + Stats ───────────────────── */}
      <section
        className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)' }}
      >
        <Sphere size={300} color="#3B82F6" opacity={0.09} className="top-0 left-[-80px]" />
        <Sphere size={200} color="#8B5CF6" opacity={0.09} className="bottom-[8%] right-[-60px]" />
        <Sphere size={150} color="#10B981" opacity={0.07} className="top-[40%] right-[5%]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-blue-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">How We Got Here</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Poppins'] font-bold text-white leading-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #60A5FA, #A78BFA)' }}>
                Story
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From where we started to where we're headed — here's our journey so far, and the roadmap that drives us forward.
            </p>
            <div className="mt-6 h-px w-16 mx-auto bg-gradient-to-r from-blue-400 to-purple-400" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical center spine — desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

            <div className="space-y-8 lg:space-y-0">
              {MILESTONES.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex flex-col lg:items-center gap-6 lg:gap-0 lg:mb-14 ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Card */}
                    <div className={`lg:w-[calc(50%-2.5rem)] ${isLeft ? 'lg:pr-10' : 'lg:pl-10'}`}>
                      <div
                        className="group relative rounded-2xl p-px overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                        style={{ background: `linear-gradient(135deg, ${m.color}40, transparent 70%)` }}
                      >
                        <div className="rounded-2xl bg-[#0B1E3D]/85 backdrop-blur-md p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${m.color}22`, color: m.color, border: `1px solid ${m.color}44` }}
                            >
                              {m.icon}
                            </div>
                            <span
                              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                              style={{ backgroundColor: `${m.color}22`, color: m.color }}
                            >
                              {m.year}
                            </span>
                            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border border-white/10 text-slate-400">
                              {m.status === 'goal' ? 'Goal' : 'Milestone'}
                            </span>
                          </div>
                          <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex w-20 justify-center items-center shrink-0 z-10">
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white/30"
                        style={{ backgroundColor: m.color, boxShadow: `0 0 12px ${m.color}88` }}
                      />
                    </div>

                    {/* Empty half for layout balance */}
                    <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats row */}
          <div
            className="mt-10 lg:mt-16 rounded-2xl p-px"
            style={{ background: 'linear-gradient(90deg, #3B82F633, #8B5CF633, #10B98133)' }}
          >
            <div className="rounded-2xl bg-[#0D1F38]/80 backdrop-blur-sm px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '2025', label: 'Founded In' },
                { value: '15-20', label: 'Team Members' },
                { value: '6', label: 'Core Service Domains' },
                { value: '100%', label: 'Dedicated to Every Project' },
              ].map((stat, i) => (
                <div key={i}>
                  <p
                    className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text mb-1"
                    style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #A78BFA)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;