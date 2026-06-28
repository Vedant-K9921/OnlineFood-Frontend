import { Link } from "react-router-dom";
import type { Restaurant } from "../types";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({
  restaurant,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
      }}
    >
      <h2>{restaurant.name}</h2>

      <p>{restaurant.description}</p>

      <p>
        Cuisine:
        {restaurant.cuisineType}
      </p>

      <p>
        Location:
        {restaurant.address}
      </p>

      <Link
        to={`/restaurants/${restaurant.id}`}
      >
        View Menu
      </Link>
    </div>
  );
}