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
import "./RestaurantDetails.css";

import type {
  Restaurant,
  MenuItem,
} from "../types";
//import Navbar from "../components/Navbar";
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
    <div className="restaurant-header">
      <h1>{restaurant.name}</h1>

      <p>{restaurant.description}</p>

      <p className="restaurant-meta">
        📍 {restaurant.address}
      </p>

      <p className="restaurant-meta">
        🍽 {restaurant.cuisineType}
      </p>

      <p className="restaurant-meta">
        ⭐ {restaurant.rating.toFixed(1)}
      </p>
    </div>

    <h2 className="menu-title">
      Menu
    </h2>

    <div className="menu-grid">
      {menu.map((item) => (
        <div
          className="menu-card"
          key={item.id}
        >
          <h3>{item.name}</h3>

          <p className="menu-description">
            {item.description}
          </p>

          <span
            className={`tag ${
              item.isVeg
                ? "veg"
                : "nonveg"
            }`}
          >
            {item.isVeg
              ? "Veg"
              : "Non-Veg"}
          </span>

          <div className="menu-footer">
            <span className="price">
              ₹{item.price}
            </span>

            <button
              className="add-btn"
              onClick={() =>
                handleAddToCart(item.id)
              }
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);
}