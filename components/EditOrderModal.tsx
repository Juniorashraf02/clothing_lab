"use client";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, MenuItem, TextField } from "@mui/material";
import { updateOrder } from "@/services/orderService";
import { Order } from "@/types/order";

interface EditOrderModalProps {
    open: boolean;
    onClose: () => void;
    order: Order | null;
    onUpdated: () => void;
}

export default function EditOrderModal({ open, onClose, order, onUpdated }: EditOrderModalProps) {
    const [status, setStatus] = useState(order?.status || "pending");

    const handleSave = async () => {
        if (!order) return;
        await updateOrder(order.id, { status });
        onUpdated();
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Update Order Status</DialogTitle>
            <DialogContent>
                <TextField
                    select
                    label="Status"
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value as "pending" | "shipped" | "delivered")
                    }
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="shipped">Shipped</MenuItem>
                    <MenuItem value="delivered">Delivered</MenuItem>
                </TextField>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
}
