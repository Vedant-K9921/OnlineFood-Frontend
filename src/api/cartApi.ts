import api from "./axios";

export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data.data;
};

export const addToCart = async (
  menuItemId: number,
  quantity: number = 1
) => {
  const response = await api.post("/cart/add", {
    menuItemId,
    quantity,
  });

  return response.data.data;
};

export const clearCart = async () => {
  const response = await api.delete("/cart/clear");
  return response.data.data;
};

export const removeCartItem = async (
  cartItemId: number
) => {
  const response = await api.delete(
    `/cart/remove/${cartItemId}`
  );

  return response.data.data;
};

export const updateCartItem = async (
  cartItemId: number,
  quantity: number
) => {
  const response = await api.put(
    `/cart/update/${cartItemId}`,
    { quantity }
  );

  return response.data.data;
};