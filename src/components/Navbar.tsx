import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          LocalBites
        </Link>

        <div className="nav-links">
          {user && (
            <>
              <Link to="/" className="nav-link">
                Restaurants
              </Link>

              <Link to="/cart" className="nav-link">
                Cart
              </Link>

              <Link to="/orders" className="nav-link">
                Orders
              </Link>

              <span>{user.name}</span>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}