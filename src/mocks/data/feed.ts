import type { FeedItem } from "../../types/feed";

export function generateFeed(
  page: number,
  limit = 5
): FeedItem[] {
  return Array.from({ length: limit }).map((_, i) => ({
    id: `${page}-${i}`,
    author: {
      id: 'user-1',
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    content: `This is post #${page}-${i}`,
    image: Math.random() > 0.5
      ? `https://picsum.photos/seed/${page}-${i}/400/300`
      : undefined,
    createdAt: new Date().toISOString(),
    likes: Math.floor(Math.random() * 100),
    liked: false,
  }));
}
