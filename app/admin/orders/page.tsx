"use client";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Order } from "@/types/order";
import { deleteOrder } from "@/services/orderService";
import { Button } from "@mui/material";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    setOrders(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order)));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteOrder(id);
    await fetchOrders();
  };

  const columns: GridColDef[] = [
    { field: "customerName", headerName: "Customer", width: 200 },
    { field: "productId", headerName: "Product ID", width: 200 },
    { field: "quantity", headerName: "Qty", width: 100 },
    { field: "totalPrice", headerName: "Total", width: 120 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h1>Admin Orders</h1>
      <DataGrid
        rows={orders}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
        pageSizeOptions={[5, 10, 20]}
      />
    </div>
  );
}
