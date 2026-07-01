export interface OwnerDashboard {
  restaurantId: number;
  restaurantName: string;
  totalOrders: number;
  deliveredOrders: number;
  pendingOrders: number;
  totalRevenue: number;
}

export interface AdminDashboard {
  totalUsers: number;
  totalRestaurants: number;
  totalOrders: number;
  totalRevenue: number;
}