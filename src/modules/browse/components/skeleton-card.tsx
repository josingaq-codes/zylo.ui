import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="px-2 py-2 border rounded-xl space-y-2">
      <Skeleton className="h-6 w-3/4 rounded-xl" />
      <Skeleton className="h-4 w-1/2 rounded-xl" />
      <Skeleton className="h-[250px] sm:h-[300px] md:h-[350px] w-full rounded-xl" />
    </div>
  );
};
