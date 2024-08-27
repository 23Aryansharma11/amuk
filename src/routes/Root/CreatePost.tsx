import postService from "@/appwrite/post.appwrite";
import { cn } from "@/lib/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Post created!");
    const payload = {};
    const response = await postService.createPost(
      userId!,
      formData.title,
      formData.description
    );
    console.log(response);
    navigate(`/success/${response?.$id}`);
  };

  return (
    <main className=" h-full w-full flex flex-col justify-center items-center bg-amuk-background">
      <form
        onSubmit={handleSubmit}
        className="w-10/12 border-2 border-white p-8 sm:p-5 md:p-10 lg:p-16 rounded-2xl flex flex-col gap-16 text-center"
      >
        <div className="space-y-5">
          <IoArrowBackOutline
            size={25}
            onClick={goBack}
            className="cursor-pointer"
          />

          <h2>Create Post</h2>
        </div>

        <div className="flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What's on your mind?"
              value={formData.title}
              onChange={handleChange}
              maxLength={100}
              required
              autoComplete="off"
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
            />
            <div className="text-sm text-right text-stone-500">
              {formData.title.length}/100
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description (optional)</label>
            <textarea
              name="description"
              id="description"
              placeholder="Tell your audience more about it..."
              value={formData.description}
              onChange={handleChange}
              maxLength={5000}
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none resize-none min-h-32"
            />
            <div className="text-sm text-right text-stone-500">
              {formData.description.length}/5000
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            disabled={loading}
            type="submit"
            className={cn(
              "w-64 px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none",
              {
                "cursor-not-allowed bg-amuk-foreground/50": loading,
                "hover:bg-amuk-accent": !loading,
              }
            )}
          >
            Post
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreatePost;
