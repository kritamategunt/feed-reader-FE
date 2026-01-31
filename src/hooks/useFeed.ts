import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export type FeedResponse = {
  data: any[];
  nextPage: number | null;
};

const fetchFeed = async ({ pageParam = 1 }) => {
  const response = await axios.get<FeedResponse>('/api/feed', {
    params: { page: pageParam },
  });

  return response.data;
};

export const useFeed = () => {
  return useInfiniteQuery({
    queryKey: ['feed'],
    initialPageParam: 1, // ✅ REQUIRED in TanStack v5
    queryFn: fetchFeed,
    getNextPageParam: lastPage =>
      lastPage.nextPage ?? undefined,
  });
};
