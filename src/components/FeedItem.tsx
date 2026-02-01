import { useState } from "react";
import type { FeedPost } from "../mocks/mockFeedData";

type Props = {
  post: FeedPost;
};

export function FeedItem({ post }: Props) {
  const [liked, setLiked] = useState(post.liked ?? false);
  const [likes, setLikes] = useState(post.likes);
  const [burst, setBurst] = useState(false);

  function toggleLike() {
    if (!liked) {
      setBurst(true);
      setTimeout(() => setBurst(false), 600);
    }

    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <p className="font-medium mb-2">{post.author}</p>
      <p className="mb-3 text-gray-700">{post.content}</p>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt=""
          className="rounded-lg mb-3"
        />
      )}

      {/* Like section */}
      <div className="relative inline-flex items-center gap-2">
        <button
          onClick={toggleLike}
          className="relative text-lg active:scale-90 transition-transform"
        >
          <span className={liked ? "text-red-500" : "text-gray-400"}>
            ❤️
          </span>

          {/* Burst heart */}
          {burst && (
            <span className="absolute inset-0 animate-heart-burst text-red-400">
              ❤️
            </span>
          )}
        </button>

        <span className="text-sm text-gray-600">{likes}</span>
      </div>
    </div>
  );
}
