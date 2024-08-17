import { useUserStore } from "@/store/useStore";
import { Link } from "react-router-dom";


const Navbar = () => {

  const {user} = useUserStore()

    return (
      <nav className="bg-amuk-background h-20 w-full px-3 flex items-center place-content-between text-white">
        <Link to="/">
          <div className="flex items-center justify-center gap-3 text-3xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjz0SIUkZMk_CefWOZH-rSFw3Hf4SmJYIcVA&s"
              className="size-12 rounded-full invert"
            />
            Amuk
          </div>
        </Link>
        <Link to={user ? `/dashboard/${user.id}` : "/auth/sign-in"}>
          <div className="px-4 text-xl">
            {user ? (
              <img
                src={user?.avatar}
                className="size-12 rounded-full"
              />
            ) : (
              <button className="px-8 border-2 border-amuk-accent rounded-[10px] text-amuk-accent">
                Login
              </button>
            )}
          </div>
        </Link>
    </nav>
  )

}

export default Navbar