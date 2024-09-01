import { Skeleton } from "@/components/ui/skeleton";

type SkeletonSchema = {
  grid: number;
};

const SkeletonSchema = (props: SkeletonSchema) => {
  const { grid } = props;

  return Array.from({ length: grid }).map((_, index) => (
    <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
      <Skeleton className="h-[280px] w-[280px] rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[280px]" />
        <Skeleton className="h-4 w-[280px]" />
      </div>
    </div>
  ));
};

export default SkeletonSchema;
