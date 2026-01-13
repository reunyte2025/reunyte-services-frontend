import Carriers from "@/pages/Carriers";

// Add artificial delay to see loading screen (remove in production)
async function CarriersContent() {
  // Simulate data loading - REMOVE THIS IN PRODUCTION
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return <Carriers />;
}

export default function Page() {
  return <CarriersContent />;
}