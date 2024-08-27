import { useParams } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCopy } from "react-icons/io";
import { useUserStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";

const SuccessPage = () => {
  const { postId } = useParams();
  const { user } = useUserStore();
  const link = `https://amuk.netlify.app/feedback/${user?.name}/${postId}`;
  return (
    <div className="w-full h-max flex justify-center items-center flex-col gap-5">
      <section className="flex justify-center items-center flex-col gap-2">
        <IoCheckmarkCircle className="size-36 md:size-40 lg:size-72" />
        <h1 className="font-normal">Posted Successfully</h1>
      </section>
      <section className="flex justify-center items-center flex-col w-full gap-2">
        <h3>Share with your audience</h3>
        <span className="border border-white rounded-xl py-1 px-2 bg-amuk-foreground flex justify-center items-center w-10/12 md:w-5/12 lg:w-4/12">
          <input
            type="text"
            readOnly
            className="bg-transparent flex-grow focus:outline-none w-max"
            value={link}
          />
          |
          <button>
            <IoIosCopy size={25} fill="white" />
          </button>
        </span>
      </section>
      <Button className="bg-amuk-foreground hover:bg-amuk-foreground text-white rounded-xl" onClick={()=> window.location.href = `/dashboard/${user?.name}`}>
        Continue to Dashboard
      </Button>
    </div>
  );
};

export default SuccessPage;
