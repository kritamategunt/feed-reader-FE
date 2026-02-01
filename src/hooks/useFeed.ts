import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type FeedResponse = {
  data: any[];
  nextPage: number | null;
};

const fetchFeed = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<FeedResponse> => {
  const response = await axios.get<FeedResponse>("/api/feed", {
    params: { page: pageParam },
  });
  return response.data;
};

export function useFeed() {
  const queryClient = useQueryClient();

  const query = useInfiniteQuery({
    queryKey: ["feed"],
    queryFn: ({ pageParam }) => fetchFeed({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  // ✅ attach refresh to hook result
  const refresh = async () => {
    await queryClient.resetQueries({
      queryKey: ["feed"],
    });
  };

  return {
    ...query,
    refresh,
  };
}
