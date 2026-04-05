import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
