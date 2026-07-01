import api from "./axios";

export async function getOwnerDashboard() {
  const response = await api.get("/owner/dashboard");
  return response.data.data;
}

export async function getOwnerRestaurants() {
  const response = await api.get("/restaurants/owner");
  return response.data.data;
}

export async function getOwnerOrders() {
  const response = await api.get("/owner/orders");
  return response.data.data;
}

export async function updateOrderStatus(
  orderId: number,
  status: string
) {
  const response = await api.put(
    `/orders/${orderId}/status`,
    { status }
  );

  return response.data.data;
}