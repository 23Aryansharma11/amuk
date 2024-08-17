import authService from "@/appwrite/auth.appwrite";
import { formDataToString } from "@/lib/utils";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const { email, password } = formDataToString(formData);

    const response = await authService.signInUser(email, password);

    if (!response?.$id) {
      return toast.error("Invalid email or password");
    }

    toast.success("Logged in successfully");
    return navigate(`/dashboard/${response.$id}`);
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-amuk-background">
      <form
        onSubmit={handleSubmit}
        className=" w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 border-2 border-white p-8 sm:p-5 md:p-10 lg:p-16 rounded-2xl flex flex-col gap-16 text-center "
      >
        <div className="space-y-5">
          <Link to = "/"><IoArrowBackOutline size={25} /></Link>
          <h2>Sign in</h2>
          <h6>
          Log in to view your anonymous messages and stay connected with your followers.
          </h6>
        </div>
        <div className="flex flex-col gap-11 text-left">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              autoComplete="off"
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              minLength={8}
              maxLength={20}
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
            />
          <Link className="text-sm text-stone-500" to = "/auth/forgot-password">forgot password?</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            type="submit"
            className="w-64 px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
          >
            Sign In
          </button>
          <Link to="/auth/sign-up">
            Don't have an account? <span>Sign up</span>
          </Link>
        </div>
      </form>
    </main>
  );
}

export default SignIn