import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import CartPage from "./pages/Cart";

import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/restaurants/:id"
            element={<RestaurantDetails />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;