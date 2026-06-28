import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "16px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link to="/">Restaurants</Link>

      <Link to="/cart">Cart</Link>

      {user && (
        <>
          <span>{user.name}</span>

          <button onClick={logout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}