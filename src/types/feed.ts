export interface FeedItem {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  liked: boolean;
}

export interface FeedResponse {
  data: FeedItem[];
  nextCursor: string | null;
}
