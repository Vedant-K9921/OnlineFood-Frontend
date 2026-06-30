import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCart,
  removeCartItem,
  updateCartItem,
  clearCart,
} from "../api/cartApi";

import type {
  Cart,
  CartItem,
} from "../types";
import "./Cart.css";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadCart = async () => {
    try {
      setLoading(true);

      const data = await getCart();
      setCart(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load cart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const increaseQty = async (item: CartItem) => {
    try {
      await updateCartItem(
        item.cartItemId,
        item.quantity + 1
      );

      await loadCart();
    } catch (error) {
      console.error(error);
      alert("Unable to update quantity.");
    }
  };

  const decreaseQty = async (item: CartItem) => {
    if (item.quantity <= 1) return;

    try {
      await updateCartItem(
        item.cartItemId,
        item.quantity - 1
      );

      await loadCart();
    } catch (error) {
      console.error(error);
      alert("Unable to update quantity.");
    }
  };

  const removeItem = async (cartItemId: number) => {
    try {
      await removeCartItem(cartItemId);
      await loadCart();
    } catch (error) {
      console.error(error);
      alert("Unable to remove item.");
    }
  };

  const clearAll = async () => {
    if (!window.confirm("Clear the entire cart?")) {
      return;
    }

    try {
      await clearCart();
      await loadCart();
    } catch (error) {
      console.error(error);
      alert("Unable to clear cart.");
    }
  };

  if (loading) {
    return <h2>Loading Cart...</h2>;
  }

  return (
  <div className="cart-page">
    <h1 className="cart-title">My Cart</h1>

    {!cart || cart.items.length === 0 ? (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>

        <br />

        <button
          className="checkout-btn"
          onClick={() => navigate("/")}
        >
          Browse Restaurants
        </button>
      </div>
    ) : (
      <>
        {cart.items.map((item) => (
          <div
            className="cart-card"
            key={item.cartItemId}
          >
            <h3>{item.menuItemName}</h3>

            <p className="cart-price">
              Price: ₹{item.price}
            </p>

            <p className="cart-price">
              Subtotal: ₹{item.subtotal}
            </p>

            <div className="quantity-row">
              <button
                className="qty-btn"
                onClick={() => decreaseQty(item)}
              >
                −
              </button>

              <strong>{item.quantity}</strong>

              <button
                className="qty-btn"
                onClick={() => increaseQty(item)}
              >
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.cartItemId)}
            >
              Remove Item
            </button>
          </div>
        ))}

        <div className="cart-summary">
          <div className="cart-total">
            Total: ₹{cart.totalAmount}
          </div>

          <div className="cart-actions">
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

            <button
              className="clear-btn"
              onClick={clearAll}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </>
    )}
  </div>
);
}