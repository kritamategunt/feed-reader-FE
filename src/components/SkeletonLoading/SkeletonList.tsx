export function SkeletonFeedCard() {
  return (
    <div className="p-4 border rounded-lg space-y-3 animate-pulse">
      {/* Author */}
      <div className="h-4 w-32 bg-gray-200 rounded" />

      {/* Image placeholder */}
      <div className="h-48 w-full bg-gray-200 rounded" />

      {/* Content lines */}
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />

      {/* Likes */}
      <div className="h-4 w-16 bg-gray-200 rounded" />
    </div>
  );
}
