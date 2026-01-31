export type FeedPost = {
  id: string;
  author: string;
  content: string;
  imageUrl?: string;
  likes: number;
};

export const PAGE_SIZE = 5;

export const mockFeed: FeedPost[] = Array.from({ length: 15 }).map((_, i) => ({
  id: String(i + 1),
  author: `User ${i + 1}`,
  content: `This is post number ${i + 1}`,
  imageUrl:
    i % 2 === 0
      ? `https://picsum.photos/seed/${i}/400/300`
      : undefined,
  likes: Math.floor(Math.random() * 100),
}));
