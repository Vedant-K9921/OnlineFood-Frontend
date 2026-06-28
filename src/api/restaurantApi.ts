import api from "./axios";

export const getRestaurants = async () => {
  const response = await api.get("/restaurants");
  return response.data.data;
};

export const getRestaurantById = async (
  id: string
) => {
  const response = await api.get(
    `/restaurants/${id}`
  );

  return response.data.data;
};

export const getRestaurantMenu = async (
  restaurantId: string
) => {
  const response = await api.get(
    `/menu/restaurant/${restaurantId}`
  );

  return response.data.data;
};