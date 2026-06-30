export interface User {
  id: number;
  name: string;
  email: string;
  role: "CUSTOMER" | "OWNER" | "ADMIN";
}

export interface AuthResponse {
  token: string;
  user: User;
}

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

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isVeg: boolean;
  isAvailable: boolean;
}

export interface CartItem {
  cartItemId: number;
  menuItemId: number;
  menuItemName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Cart {
  items: CartItem[];
  totalAmount: number;
}

export interface OrderItem {
  menuItemId: number;
  menuItemName: string;
  quantity: number;
  priceAtOrder: number;
  subtotal: number;
}

export interface Order {
  id: number;
  userId: number;
  restaurantId: number;
  deliveryAddress: string;
  status: string;
  paymentStatus: string;
  totalAmount: number;
  createdAt: string;
  items: OrderItem[];
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: "ROLE_CUSTOMER" | "ROLE_OWNER" | "ROLE_ADMIN";
}