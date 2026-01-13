import ContactUs from "@/pages/Contactus";

// Add artificial delay to see loading screen (remove in production)
async function ContactContent() {
  // Simulate data loading - REMOVE THIS IN PRODUCTION
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return <ContactUs />;
}

export default function Page() {
  return <ContactContent />;
}