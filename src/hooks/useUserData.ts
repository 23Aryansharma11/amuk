import { User } from "@/store/@types.store";
import { formatNumber, formatDate } from "@/lib/utils";

export const useUserData = (user: User | null) => {
  const formattedPosts = user ? formatNumber(user.noOfPosts) : "0";

  const formattedFeedbacks = user ? formatNumber(user.noOfFeedback) : "0";

  const formattedDate = user ? formatDate(user.joinedOn) : "0";

  return {
    formattedPosts,
    formattedFeedbacks,
    formattedDate,
  };
};
