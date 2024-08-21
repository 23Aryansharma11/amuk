import authService from "@/appwrite/auth.appwrite";
import { formDataToString } from "@/lib/utils";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

    const formData = new FormData(event.target as HTMLFormElement);
    const { name, email, password, Confirmpassword } = formDataToString(formData);

    if (password !== Confirmpassword) {
      setLoading(false); // Reset loading state on error
      return toast.error("Passwords do not match");
    }

    try {
      const response = await authService.signUpUser(name, email, password);
      if (!response?.$id) {
        return toast.error("Something went wrong");
      }

      toast.success("Account created successfully");
      navigate("/auth/sign-in");
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false); // Reset loading state after operation
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-amuk-background">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 border-2 border-white p-8 sm:p-5 md:p-10 lg:p-16 rounded-2xl flex flex-col gap-16 text-center"
      >
        <div className="space-y-5">
          <Link to="/auth/sign-in">
            <IoArrowBackOutline size={25} />
          </Link>
          <h2>Sign Up</h2>
          <h6>
            Sign up now to unlock a world of honest opinions and candid
            feedback.
          </h6>
        </div>
        <div className="flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              autoComplete="off"
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
            />
          </div>
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
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="Confirmpassword"
              id="Confirmpassword"
              required
              placeholder="Confirm Password"
              minLength={8}
              maxLength={20}
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-64 px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none ${loading ? 'cursor-not-allowed bg-amuk-foreground/50' : 'hover:bg-amuk-background'}`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <Link to="/auth/sign-in">
            Already have an account? <span>Login</span>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
