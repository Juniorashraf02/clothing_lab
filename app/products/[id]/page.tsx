
import { doc, getDoc } from "firebase/firestore";
import { Product } from "@/types/product";
import { db } from "@/app/lib/firebase";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const productRef = doc(db, "products", params.id);
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) return <div>Product not found</div>;

  const product = productSnap.data() as Product;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
