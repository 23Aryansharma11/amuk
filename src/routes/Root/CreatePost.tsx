import { useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [charCount, setCharCount] = useState(0);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Post created!");
    console.log(`Post title: ${title}\nPost description: ${description}`);
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-amuk-background">
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
              value={title}
              onChange={handleTitleChange}
              maxLength={100}
              required
              autoComplete="off"
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
            />
            <div className="text-sm text-right text-stone-500">
              {charCount}/100
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description (optional)</label>
            <textarea
              name="description"
              id="description"
              placeholder="Tell your audience more about it..."
              value={description}
              onChange={handleDescriptionChange}
              maxLength={5000}
              className="px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none resize-none min-h-32"
            />
            <div className="text-sm text-right text-stone-500">
              {description.length}/5000
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            type="submit"
            className="w-64 px-2 py-3 bg-amuk-foreground rounded-[10px] focus:outline-none"
          >
            Post
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreatePost;
