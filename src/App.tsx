import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";

import ProtectedRoute from "./components/ProtectedRoute";
import CartPage from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
  path="/restaurants/:id"
  element={
    <ProtectedRoute>
      <RestaurantDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <CartPage />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;