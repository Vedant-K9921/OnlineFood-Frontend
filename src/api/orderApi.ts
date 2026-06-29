import api from "./axios";

export const placeOrder = (deliveryAddress: string) =>
  api.post("/orders", { deliveryAddress });

export const getMyOrders = () =>
  api.get("/orders/my");

export const getOrderById = (id: number) =>
  api.get(`/orders/${id}`);