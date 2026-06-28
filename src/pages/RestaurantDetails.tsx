import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getRestaurantById,
  getRestaurantMenu,
} from "../api/restaurantApi";

import type {
  Restaurant,
  MenuItem,
} from "../types";
import Navbar from "../components/Navbar";
import { addToCart } from "../api/cartApi";

export default function RestaurantDetails() {
  const { id } = useParams();

  const [restaurant, setRestaurant] =
    useState<Restaurant | null>(null);

  const [menu, setMenu] =
    useState<MenuItem[]>([]);

  const [loading, setLoading] =
    useState(true);

  const handleAddToCart = async (
  menuItemId: number
) => {
  try {
    await addToCart(menuItemId, 1);

    alert("Added to cart");
  } catch (error) {
    console.error(error);
    alert("Failed to add item");
  }
};

  useEffect(() => {
    if (!id) return;

    Promise.all([
      getRestaurantById(id),
      getRestaurantMenu(id),
    ])
      .then(([restaurantData, menuData]) => {
        setRestaurant(restaurantData);
        setMenu(menuData);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
     <>
    <Navbar />
    <div>
      <h1>{restaurant.name}</h1>

      <p>{restaurant.description}</p>

      <p>
        Cuisine:
        {restaurant.cuisineType}
      </p>

      <h2>Menu</h2>

      {menu.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p>{item.description}</p>

          <p>₹{item.price}</p>

          <button
  onClick={() =>
    handleAddToCart(item.id)
  }
>
  Add To Cart
</button>
        </div>
      ))}
    </div>
    </>
  );
}