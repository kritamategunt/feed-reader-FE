import { Button, Spin } from 'antd';
import { FeedItem } from './FeedItem';
import { useFeed } from '../hooks/useFeed';

export const FeedList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFeed();

  if (isLoading) {
    return <Spin />;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load feed</p>;
  }

  const pages = data?.pages ?? [];

  return (
    <div className="space-y-4">
      {pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {(page.data ?? []).map(post => (
            <FeedItem key={post.id} post={post} />
          ))}
        </div>
      ))}

      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            loading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};
