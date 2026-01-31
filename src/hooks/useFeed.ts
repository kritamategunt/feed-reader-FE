import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export type FeedResponse = {
  [x: string]: any;
  data: any[];
  nextPage: number | null;
};

const fetchFeed = async ({ pageParam = 1 }) => {
  const response = await axios.get<FeedResponse>("/api/feed", {
    params: { page: pageParam },
  });
  console.log("response", response.data);
  return response.data;
};

const fetchFeedMockApi = () => {
  return useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: ({ pageParam = 1 }) => fetchFeed({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export { fetchFeedMockApi as useFeed };
