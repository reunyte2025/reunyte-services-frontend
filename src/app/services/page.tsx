import Services from "@/pages/Services";

async function ServicesContent() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <Services />;
}

export default function Page() {
  return <ServicesContent />;
}