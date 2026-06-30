import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../api/orderApi";

import "./Checkout.css";

export default function Checkout() {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handlePlaceOrder() {
    if (!deliveryAddress.trim()) {
      alert("Please enter a delivery address.");
      return;
    }

    try {
      setLoading(true);

      await placeOrder(deliveryAddress);

      alert("Order placed successfully!");

      navigate("/orders");
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <label>Delivery Address</label>

      <textarea
        rows={5}
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        placeholder="Enter delivery address..."
      />

      <button
        className="place-order-btn"
        onClick={handlePlaceOrder}
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}