export interface Restaurant {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  imageUrl: string;
  cuisineType: string;
  isOpen: boolean;
  rating: number;
}