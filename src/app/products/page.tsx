import Products from "@/pages/Product";

async function ProductsContent() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <Products />;
}

export default function Page() {
  return <ProductsContent />;
}