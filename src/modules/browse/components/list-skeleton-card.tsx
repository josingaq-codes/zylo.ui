import { SkeletonCard } from "@/modules/browse/components/skeleton-card";

interface ListSkeletonCardProps {
  quantity: number;
}

export const ListSkeletonCard = ({ quantity }: ListSkeletonCardProps) => {
  return (
    <>
      {Array.from({ length: quantity }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </>
  );
};
