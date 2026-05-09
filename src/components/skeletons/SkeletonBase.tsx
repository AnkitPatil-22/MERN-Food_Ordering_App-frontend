import { cn } from "@/lib/utils";

const SkeletonBase = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-gray-200", // Default look: pulsing & gray
                className, // This allows you to pass 'h-10 w-full' etc. from the parent
            )}
        />
    );
};

export default SkeletonBase;
