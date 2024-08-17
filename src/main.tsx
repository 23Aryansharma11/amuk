import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Loader from "./components/custom/Loader.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import AuthLoader from "./components/custom/AuthLoader.tsx";

const Home = lazy(() => import("./routes/Root/Home.tsx"));
const Dashboard = lazy(() => import("./routes/Root/Dashboard.tsx"));
const CreatePost = lazy(() => import("./routes/Root/CreatePost.tsx"));
const CreatePoll = lazy(() => import("./routes/Root/CreatePoll.tsx"));
const ContactUs = lazy(() => import("./routes/Root/ContactUs.tsx"));
const FeedbackPoll = lazy(() => import("./routes/Root/FeedbackPoll.tsx"));
const FeedbackPost = lazy(() => import("./routes/Root/FeedbackPost.tsx"));
const ManagePost = lazy(() => import("./routes/Root/ManagePost.tsx"));
const Settings = lazy(() => import("./routes/Root/Settings.tsx"));
const UpdatePost = lazy(() => import("./routes/Root/UpdatePost.tsx"));
const SuccessPage = lazy(() => import("./routes/Root/SuccessPage.tsx"));
const SignIn = lazy(() => import("./routes/Auth/SignIn.tsx"));
const SignUp = lazy(() => import("./routes/Auth/SignUp.tsx"));
const ForgotPassword = lazy(() => import("./routes/Auth/ForgotPassword.tsx"));
const ErrorPage = lazy(() => import("./routes/Root/ErrorPage.tsx"));

const router: any = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dashboard/:userId",
        element: <Dashboard />,
      },
      {
        path: "create-post/:userId",
        element: <CreatePost />,
      },
      {
        path: "create-poll/:userId",
        element: <CreatePoll />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "feedback-poll/:userId/:postId",
        element: <FeedbackPoll />,
      },
      {
        path: "feedback-post/:userId/:postId",
        element: <FeedbackPost />,
      },
      {
        path: "manage-post/:userId",
        element: <ManagePost />,
      },
      {
        path: "settings/:userId",
        element: <Settings />,
      },
      {
        path: "update-post/:userId/:postId",
        element: <UpdatePost />,
      },
      {
        path: "success-page/:userId/:postId",
        element: <SuccessPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<AuthLoader />}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
