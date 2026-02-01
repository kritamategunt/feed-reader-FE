import { FeedItem } from './FeedItem';
import { useFeed } from '../hooks/useFeed';
import { SkeletonFeedList } from './SkeletonLoading/SkeleFeedList';
import { useEffect, useRef } from 'react';
import { SkeletonFeedCard } from './SkeletonLoading/SkeletonList';
import { PullToRefresh } from './pullToRefresh';

export const FeedList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refresh
  } = useFeed();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Observe bottom sentinel
  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <SkeletonFeedList />;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load feed</p>;
  }

  const pages = data?.pages ?? [];

  return (
    <PullToRefresh onRefresh={refresh}>


      <div className="space-y-4">
        {/* Render posts */}
        {pages.map((page) =>
          page.data.map((post) => (
            <FeedItem key={post.id} post={post} />
          ))
        )}

        {/* Load more indicator */}
        {isFetchingNextPage && (
          <SkeletonFeedCard />
        )}

        {/* End message */}
        {!hasNextPage && (
          <p className="text-center text-gray-400">
            You’ve reached the end 👋
          </p>
        )}

        {/* Scroll sentinel */}
        <div ref={loadMoreRef} className="h-4" />
      </div>
    </PullToRefresh>
  );
};
