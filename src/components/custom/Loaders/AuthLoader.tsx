import { TypeAnimation } from "react-type-animation";

const AuthLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-amuk-background gap-5">
      <span className="size-10 rounded-full border-t-2 border-t-white animate-spin"></span>
      <h2 className="text-amuk-accent">
        <TypeAnimation
          sequence={[
            "Connecting you to Amuk...",
            500,
            "Preparing your safe space...",
            500,
            "Securing your anonymity...",
            500,
            "Setting up your experience...",
            500,
            "Ensuring your privacy...",
            500,
          ]}
          speed={75}
          cursor={true}
          repeat={Infinity}
        />
      </h2>
    </div>
  );
};

export default AuthLoader;
