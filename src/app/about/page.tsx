import About from "@/pages/About";

// Add artificial delay to see loading screen (remove in production)
async function AboutContent() {
  // Simulate data loading - REMOVE THIS IN PRODUCTION
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return <About />;
}

export default function Page() {
  return <AboutContent />;
}