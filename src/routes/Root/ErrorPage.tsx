import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className=" text-3xl font-bold w-full h-screen flex flex-col items-center justify-center bg-amuk-background gap-4">
      <h1>Whoops!!</h1>
      <h2 className="font-medium">Looks like you are lost</h2>
      <Button
      className="bg-amuk-foreground text-white rounded-xl border-2 border-white hover:bg-inherit"
      onClick={()=> navigate("/")}
      >Go Home</Button>
    </div>
  );
};

export default ErrorPage;
