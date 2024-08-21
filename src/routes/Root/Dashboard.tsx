import { useUserStore } from "@/store/useStore"
import { Link } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { HiMiniChartBar } from "react-icons/hi2";
import { MdManageSearch } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { useUserData } from "@/hooks/useUserData";
import toast from "react-hot-toast";

const Dashboard = () => {
  const {user} = useUserStore()
  const { formattedPosts, formattedFeedbacks, formattedDate } = useUserData(user);

  const dashboardMenu = [
    {
      title: "Create Post",
      icon: <IoAddCircle size={87} />,
      link: `create-post/${user?.id}`,
    },
    {
      title: "Create Poll",
      icon: <HiMiniChartBar size={87} />,
      link: `create-poll/${user?.id}`,
    },
    {
      title: "Manage Posts",
      icon: <MdManageSearch size={87} />,
      link: `manage-post/${user?.id}`,
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp size={87} />,
      link: `settings/${user?.id}`,
    },
  ];

  const handleRefresh = () => {
    toast("Refresh");
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-amuk-background">
      <div className="min-h-44 w-full bg-[url('https://img.freepik.com/free-vector/abstract-pattern-design_1053-525.jpg?t=st=1723984373~exp=1723987973~hmac=53d0dc1cb2a3743fb79f88274ab5024e7690a6ad8fcea8cc090b01ebc258cf6e&w=740')] flex p-5 gap-4 items-center place-content-between">
        <div className="flex flex-col">
          <h4>{user?.name}</h4>
          <h5>{user?.email}</h5>
          <h6>Joined on: {formattedDate}</h6>
        </div>

        <div className="flex flex-col">
          <h5>{formattedPosts} Posts</h5>
          <h5>{formattedFeedbacks} Feedbacks</h5>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-60 my-3 py-4 px-6 gap-16 justify-center">
      {dashboardMenu.map((item, index) => (
        <Link
          key={index}
          to={`/${item.link}`}
          className="min-h-full min-w-60 bg-amuk-foreground rounded-[20px] flex flex-col items-center justify-center"
        >
          {item.icon}
          <span className="text-[28px]">{item.title}</span>
        </Link>
      ))}
      </div>

      <div className="flex flex-col p-6 my-3 w-full">
        <div className="flex items-center">
          <h4>Latest Replies</h4>&nbsp;&nbsp;
          <LuRefreshCw size={24} onClick={handleRefresh} className="cursor-pointer"/></div>
        
        {/* div to contain activity here*/}
      </div>
    </main>
  );
};

export default Dashboard;
