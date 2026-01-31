import type { FeedItem } from "../../types/feed";
import axios from 'axios';

export interface FeedResponse {
  data: FeedItem[];
  nextCursor?: string;
}

export const fetchFeed = async ({
  pageParam = null,
}: {
  pageParam?: string | null;
}): Promise<FeedResponse> => {
  const res = await axios.get('/api/feed', {
    params: { cursor: pageParam },
  });
  return res.data;
};
