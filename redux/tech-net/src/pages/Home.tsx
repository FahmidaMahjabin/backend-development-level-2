// import ProductsProvider, { useProducts } from "../hooks/ProductsProvider";

import { useProducts } from "../hooks/ProductsProvider";

export default function Home() {
  const data = useProducts();
  console.log("data:", data);
  return <p>Home</p>;
}
