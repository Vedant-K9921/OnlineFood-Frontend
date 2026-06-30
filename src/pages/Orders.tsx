import { useEffect, useState } from "react";

import { getMyOrders } from "../api/orderApi";

import type { Order } from "../types";

import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await getMyOrders();
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return <h2>Loading Orders...</h2>;
  }

  return (
    <div className="orders-page">
      <h1 className="orders-title">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="empty-orders">
          No orders found.
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="order-card"
          >
            <div className="order-header">
              <div className="order-info">
                <h2>Order #{order.id}</h2>

                <p>
                  Status:
                  {" "}
                  {order.status}
                </p>

                <p>
                  Payment:
                  {" "}
                  {order.paymentStatus}
                </p>

                <p>
                  Address:
                  {" "}
                  {order.deliveryAddress}
                </p>

                <p>
                  Date:
                  {" "}
                  {new Date(
                    order.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="order-items">
              {order.items.map((item) => (
                <div
                  key={item.menuItemId}
                  className="order-item"
                >
                  <span>
                    {item.menuItemName}
                    {" × "}
                    {item.quantity}
                  </span>

                  <span>
                    ₹{item.subtotal}
                  </span>
                </div>
              ))}
            </div>

            <div className="order-total">
              Total : ₹{order.totalAmount}
            </div>
          </div>
        ))
      )}
    </div>
  );
}