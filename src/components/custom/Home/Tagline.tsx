import { TypeAnimation } from "react-type-animation";

const Tagline = () => {
  return (
    <h2 className="font-light">
      Ideal for{" "}
      <span className="text-amuk-accent">
        <TypeAnimation
          sequence={[
            "Content Creators",
            1000,
            "Teachers",
            1000,
            "Friends",
            1000,
            "Family",
            1000,
            "Everyone",
            1000,
          ]}
          speed={50}
          cursor={false}
          repeat={0}
        />
      </span>
    </h2>
  );
};

export default Tagline;
