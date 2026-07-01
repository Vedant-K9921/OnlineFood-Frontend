import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import OwnerDashboard from "./pages/owner/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import RoleRoute from "./components/RoleRoute";
import CreateRestaurant from "./pages/CreateRestaurant";

import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
  path="/owner"
  element={<OwnerDashboard />}
/>

<Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/owner/create-restaurant"
  element={
    <RoleRoute allowedRoles={["ROLE_OWNER"]}>
      <CreateRestaurant />
    </RoleRoute>
  }
/>

<Route
  path="/owner"
  element={
    <RoleRoute allowedRoles={["ROLE_OWNER"]}>
      <OwnerDashboard />
    </RoleRoute>
  }
/>
<Route
  path="/admin"
  element={
    <RoleRoute allowedRoles={["ROLE_ADMIN"]}>
      <AdminDashboard />
    </RoleRoute>
  }
/>

        {/* Protected */}
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

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />
        </Route>
        <Route
  path="/register"
  element={<Register />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;