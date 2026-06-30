import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../api/authApi";
import type { RegisterRequest } from "../types";

import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "ROLE_CUSTOMER",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (form.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      await register(form);

      alert("Registration successful.");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Create Account</h1>

      <form
        className="register-form"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="ROLE_CUSTOMER">
            Customer
          </option>

          <option value="ROLE_OWNER">
            Restaurant Owner
          </option>

          <option value="ROLE_ADMIN">
            Admin
          </option>
        </select>

        <button
          className="register-btn"
          disabled={loading}
        >
          {loading
            ? "Creating..."
            : "Register"}
        </button>
      </form>

      <div className="login-link">
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}