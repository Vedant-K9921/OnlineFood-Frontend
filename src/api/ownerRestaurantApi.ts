import api from "./axios";

export interface RestaurantRequest {
  name: string;
  description: string;
  address: string;
  phone: string;
  imageUrl: string;
  cuisineType: string;
  isOpen: boolean;
}

export async function createRestaurant(
  restaurant: RestaurantRequest
) {
  const response = await api.post(
    "/restaurants",
    restaurant
  );

  return response.data.data;
}