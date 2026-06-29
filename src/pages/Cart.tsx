import { useEffect, useState } from "react";

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

//import Navbar from "../components/Navbar";

export default function CartPage() {
  const [cart, setCart] =
    useState<Cart | null>(null);

  const [loading, setLoading] =
    useState(true);

  const loadCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const increaseQty = async (
    item: CartItem
  ) => {
    await updateCartItem(
      item.cartItemId,
      item.quantity + 1
    );

    loadCart();
  };

  const decreaseQty = async (
    item: CartItem
  ) => {
    if (item.quantity === 1) {
      return;
    }

    await updateCartItem(
      item.cartItemId,
      item.quantity - 1
    );

    loadCart();
  };

  const removeItem = async (
    cartItemId: number
  ) => {
    await removeCartItem(cartItemId);

    loadCart();
  };

  const clearAll = async () => {
    await clearCart();

    loadCart();
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>

      <div style={{ padding: "20px" }}>
        <h1>My Cart</h1>

        {!cart ||
        cart.items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.items.map((item) => (
              <div
                key={item.cartItemId}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h3>
                  {item.menuItemName}
                </h3>

                <p>
                  Price: ₹{item.price}
                </p>

                <p>
                  Subtotal:
                  ₹{item.subtotal}
                </p>

                <div>
                  <button
                    onClick={() =>
                      decreaseQty(item)
                    }
                  >
                    -
                  </button>

                  <span
                    style={{
                      margin: "0 10px",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item)
                    }
                  >
                    +
                  </button>
                </div>

                <br />

                <button
                  onClick={() =>
                    removeItem(
                      item.cartItemId
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>
              Total: ₹
              {cart.totalAmount}
            </h2>

            <button
              onClick={clearAll}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </>
  );
}