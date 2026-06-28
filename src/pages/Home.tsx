import { useEffect, useState } from "react";

import { getRestaurants } from "../api/restaurantApi";

import RestaurantCard from "../components/RestaurantCard";

import type { Restaurant } from "../types";

import Navbar from "../components/Navbar";

export default function Home() {
  const [restaurants, setRestaurants] =
    useState<Restaurant[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <>
    <Navbar />

    <div>
      <h1>Restaurants</h1>

      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  </>
);
}