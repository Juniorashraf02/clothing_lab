import { db } from "@/app/lib/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Order } from "@/types/order";

const ordersRef = collection(db, "orders");

export async function addOrder(order: Omit<Order, "id">) {
  return await addDoc(ordersRef, order);
}

export async function updateOrder(id: string, order: Partial<Order>) {
  const orderRef = doc(db, "orders", id);
  return await updateDoc(orderRef, order);
}

export async function deleteOrder(id: string) {
  const orderRef = doc(db, "orders", id);
  return await deleteDoc(orderRef);
}
