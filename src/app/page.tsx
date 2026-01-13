import Home from "@/pages/Home";

// Add artificial delay to see loading screen (remove in production)
async function HomeContent() {
  // Simulate data loading - REMOVE THIS IN PRODUCTION
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return <Home />;
}

export default function Page() {
  return <HomeContent />;
}