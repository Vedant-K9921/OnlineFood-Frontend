import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createRestaurant,
} from "../api/ownerRestaurantApi";

export default function CreateRestaurant() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    phone: "",
    imageUrl: "",
    cuisineType: "",
    isOpen: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createRestaurant(form);

      alert("Restaurant created!");

      navigate("/owner");
    } catch (err) {
      console.error(err);
      alert("Could not create restaurant.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Create Restaurant</h1>

      <form onSubmit={submit}>

        <input
          name="name"
          placeholder="Restaurant Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="cuisineType"
          placeholder="Cuisine"
          value={form.cuisineType}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Create Restaurant
        </button>

      </form>
    </div>
  );
}