import { Skeleton } from "../../../../components/ui/Skeleton/Skeleton";
import { ImageWrapper } from "../styles";

interface FeedSkeletonProps {
  cells?: number;
}

export const FeedSkeleton = ({ cells = 15 }: FeedSkeletonProps) => {
  return <Skeleton wrapper={ImageWrapper} count={cells} height="100%" />;
};
