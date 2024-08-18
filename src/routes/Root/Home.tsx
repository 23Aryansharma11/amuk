import HomeCards from "@/components/custom/Home/HomeCards";
import Tagline from "@/components/custom/Home/Tagline";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full bg-amuk-background px-1 md:px-10 pt-2 md:pt-5 gap-5 md:gap-12">
      <section className="flex justify-center items-center flex-col gap-2 md:gap-4">
        <h1>True Feedback is Anonymous</h1>
        <Tagline />
      </section>

      <img
        src="https://res.cloudinary.com/aryansharma/image/upload/f_auto,q_auto/f7wb2mat6rqwuaql6hsa"
        alt="dashboard image"
        className="shadow-[5px_5px_100px_rgba(112,118,192,0.5)] w-7/12 rounded-xl"
      />

      <p>
        By protecting identity, <span className="text-amuk-accent">Amuk</span>{" "}
        creates a space for meaningful feedback
      </p>
      <HomeCards />
    </div>
  );
};

export default Home;
