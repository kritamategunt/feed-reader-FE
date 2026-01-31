import { SkeletonFeedCard } from "./SkeletonList";

export function SkeletonFeedList() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonFeedCard key={index} />
      ))}
    </div>
  );
}
