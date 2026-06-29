import { Link } from "react-router-dom";
import type { Restaurant } from "../types";

import "./RestaurantCard.css";

interface Props {
  restaurant: Restaurant;
}

const PLACEHOLDER_IMAGE =
  "https://placehold.co/600x400?text=Restaurant";

export default function RestaurantCard({
  restaurant,
}: Props) {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={
          restaurant.imageUrl?.startsWith("https://images.unsplash.com")
            ? restaurant.imageUrl
            : PLACEHOLDER_IMAGE
        }
        alt={restaurant.name}
      />

      <div className="restaurant-content">
        <h2 className="restaurant-name">
          {restaurant.name}
        </h2>

        <p className="restaurant-description">
          {restaurant.description}
        </p>

        <p className="restaurant-info">
          <strong>Cuisine:</strong>{" "}
          {restaurant.cuisineType}
        </p>

        <p className="restaurant-info">
          <strong>Address:</strong>{" "}
          {restaurant.address}
        </p>

        <p className="restaurant-info">
          <strong>Rating:</strong>{" "}
          {restaurant.rating.toFixed(1)}
        </p>

        <span
          className={`restaurant-status ${
            restaurant.isOpen ? "open" : "closed"
          }`}
        >
          {restaurant.isOpen ? "Open" : "Closed"}
        </span>

        <br />

        <Link
          className="view-btn"
          to={`/restaurants/${restaurant.id}`}
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}