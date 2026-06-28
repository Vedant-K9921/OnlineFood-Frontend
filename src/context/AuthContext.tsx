import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "../api/authApi";

interface AuthContextType {
  user: any;
  loading: boolean;
  logout: () => void;
  setUser: (user: any) => void;
}

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
  localStorage.removeItem("token");
  setUser(null);

  window.location.href = "/login";
};

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Auth Context missing");
  }

  return context;
};