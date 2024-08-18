import { useUserStore } from "@/store/useStore";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const AuthLayout = () => {
  const { user } = useUserStore();
  return !user ? (
    <main>
      <Outlet />
    </main>
  ) : (
    <Navigate to={`/dashboard/${user.id}`} />
  );
};

export default AuthLayout;