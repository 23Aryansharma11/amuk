import React from "react";
import { Button } from "../ui/button";
import authService from "@/appwrite/auth.appwrite";
import { useUserStore } from "@/store/useStore";

const LogoutButton = () => {
  const { logout } = useUserStore();
  const logoutUser = async () => {
    await authService.signOutUser();
    logout();
    // Precautionary to clear local storage
    localStorage.clear();
    // Due to Rootlayout the logged out user will be sent to login page thus no need to navigate
  };
  return (
    <Button
      className="w-full bg-red-600 text-white rounded-xl hover:bg-red-700"
      onClick={logoutUser}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
