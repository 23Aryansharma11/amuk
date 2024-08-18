import { useUserStore } from "@/store/useStore";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user } = useUserStore();
  const { pathname } = useLocation();
  return (
    <nav className="bg-amuk-background h-20 w-full px-3 flex items-center place-content-between text-white">
      <Link to="/">
        <div className="flex items-center justify-center gap-3 text-3xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjz0SIUkZMk_CefWOZH-rSFw3Hf4SmJYIcVA&s"
            className="size-4 md:size-8 rounded-full invert"
          />
          <h4>Amuk</h4>
        </div>
      </Link>
      <Link to={user ? `/dashboard/${user.id}` : "/auth/sign-in"}>
        <div className=" text-xl">
          {/* Donot show user profile button on homepage even if user is logged in */}
          {user ? (
            pathname !== "/" && (
              <img src={user?.avatar} className="size-12 rounded-full" />
            )
          ) : (
            <button className="px-2 md:px-8 py-1 border-2 border-amuk-accent rounded-[10px] text-white bg-amuk-accent text-xs md:text-lg lg:text-xl font-medium leading-relaxed shadow-[1px_2px_10px_rgba(112,118,192,0.5)]">
              Get Started
            </button>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
