import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/custom/Navbar";
import { useUserStore } from "@/store/useStore"; // Assuming you're using Zustand for managing user state

const RootLayout = () => {
  const { user } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not logged in and tries to access a protected route, redirect to login
    if (!user && location.pathname !== "/") {
      navigate("/auth/sign-in");
    }
  }, [user, location, navigate]);

  return (
    <main className="flex flex-col min-h-screen justify-between items-center">
      <Navbar />
      <div className="w-full flex-grow">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
