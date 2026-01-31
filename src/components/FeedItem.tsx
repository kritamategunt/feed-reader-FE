import { Card } from 'antd';
import type { FeedPost } from '../mocks/mockFeedData';

type Props = {
  post: FeedPost;
};

export const FeedItem = ({ post }: Props) => {
  return (
    <Card>
      <p className="font-semibold">{post.author}</p>
      <p className="mt-1">{post.content}</p>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="post"
          className="mt-3 rounded-md"
        />
      )}
    </Card>
  );
};
