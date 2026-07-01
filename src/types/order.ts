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