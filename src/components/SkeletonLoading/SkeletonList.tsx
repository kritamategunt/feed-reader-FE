import { Card, Skeleton } from "antd";

export function SkeletonFeedCard() {
  return (
    <Card className="rounded-xl">
      <Skeleton
        avatar
        paragraph={{ rows: 3 }}
        active
      />
    </Card>
  );
}
