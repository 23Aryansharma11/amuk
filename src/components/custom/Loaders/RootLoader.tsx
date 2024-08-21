import { TypeAnimation } from "react-type-animation";

const RootLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-amuk-background gap-5">
      <span className="size-10 rounded-full border-t-2 border-t-white animate-spin"></span>
      <h2 className="text-amuk-accent">
        <TypeAnimation
          sequence={[
            "Loading your dashboard...",
            1000,
            "Fetching your posts...",
            1000,
            "Preparing your workspace...",
            1000,
            "Almost ready...",
            1000,
          ]}
          speed={50}
          cursor={false}
          repeat={0}
        />
      </h2>
    </div>
  );
};

export default RootLoader;
