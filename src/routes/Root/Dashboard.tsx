import { useUserStore } from "@/store/useStore";
import { Link } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { HiMiniChartBar } from "react-icons/hi2";
import { MdManageSearch } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { useUserData } from "@/hooks/useUserData";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user } = useUserStore();
  const { formattedPosts, formattedFeedbacks, formattedDate } =
    useUserData(user);

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
    <main className="w-full flex flex-col bg-amuk-background overflow-hidden">
      <section className="w-full bg-[url('https://img.freepik.com/free-vector/black-pattern-with-wavy-shapes_1017-7482.jpg?t=st=1724737651~exp=1724741251~hmac=91fe2de8abe12acee47a9ff5b26ec7192b00222d6ba3e44c573ce8772fd30a12&w=740')] flex p-5 gap-4 items-center">
        <div className="flex flex-col gap-2">
          <h3>{user?.name}</h3>
          <h4>{user?.email}</h4>
          <h5>Joined on: {formattedDate}</h5>
        </div>

        <div className="flex flex-col gap-2">
          <h5>{formattedPosts} Posts</h5>
          <h5>{formattedFeedbacks} Feedbacks</h5>
        </div>
      </section>

      <section className="w-full flex flex-col  md:flex-row my-3 py-4 px-6 gap-16 justify-around flex-wrap">
        {dashboardMenu.map((item, index) => (
          <Link
            key={index}
            to={`/${item.link}`}
            className="min-h-full min-w-60 bg-amuk-foreground rounded-2xl flex flex-col gap-2 items-center justify-center px-10 py-5"
          >
            {item.icon}
            <span className="text-[28px]">{item.title}</span>
          </Link>
        ))}
      </section>

      <section className="flex flex-col p-6 my-3 w-full">
        <div className="flex items-center gap-2">
          <h4>Latest Replies</h4>
          <LuRefreshCw
            size={30}
            onClick={handleRefresh}
            className="cursor-pointer bg-gray-800 p-1 rounded-full"
          />
        </div>

        {/* div to contain activity here*/}
      </section>
    </main>
  );
};

export default Dashboard;
