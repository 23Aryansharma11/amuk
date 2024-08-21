import authService from "@/appwrite/auth.appwrite";
import { cn, formDataToString } from "@/lib/utils";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { User } from "@/store/@types.store";
import { useUserStore } from "@/store/useStore";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const { email, password } = formDataToString(formData);

    const response = await authService.signInUser(email, password);
    setLoading(false);
    if (!response?.documents?.length) {
      return toast.error("Invalid email or password");
    }

    // Save user to local storage
    const storageUser: User = {
      id: response.documents[0].$id,
      name: response.documents[0].name,
      email: response.documents[0].email,
      avatar: response.documents[0].avatar,
      noOfFeedback: response.documents[0].noOfFeedback,
      noOfPosts: response.documents[0].post.length,
      joinedOn: response.documents[0].$createdAt,
    };
    login(storageUser);
    toast.success("Logged in successfully");
    return navigate(`/dashboard/${response.documents[0].$id}`);
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-amuk-background">
      <form
        onSubmit={handleSubmit}
        className=" w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 border-2 border-white p-8 sm:p-5 md:p-10 lg:p-16 rounded-2xl flex flex-col gap-16 text-center "
      >
        <div className="space-y-5">
          <Link to="/">
            <IoArrowBackOutline size={25} />
          </Link>
          <h2>Sign in</h2>
          <h6>
            Log in to view your anonymous messages and stay connected with your
            followers.
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
            <Link className="text-sm text-stone-500" to="/auth/forgot-password">
              forgot password?
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-64 px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none",
              {
                "cursor-not-allowed bg-amuk-foreground/50": loading,
                "hover:bg-amuk-background": !loading,
              }
            )}
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
          <Link to="/auth/sign-up">
            Don't have an account? <span className="underline">Sign up</span>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignIn;