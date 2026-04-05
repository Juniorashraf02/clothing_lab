import EditOrderModal from "@/components/EditOrderModal";
import { Order } from "@/types/order";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [open, setOpen] = useState(false);

  const fetchOrders = async () => { /* same as before */ };

  const handleEdit = (order: Order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleDelete = async (id: string) => { /* same as before */ };

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
        <>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row as Order)}
            style={{ marginRight: "0.5rem" }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
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
      <EditOrderModal
        open={open}
        onClose={() => setOpen(false)}
        order={selectedOrder}
        onUpdated={fetchOrders}
      />
    </div>
  );
}
