import SkeletonBase from "./SkeletonBase";

const CuisineFilterSkeleton = () => {
    return (
        <div className="flex flex-col gap-4">
            <SkeletonBase className="h-6 w-32" /> {/* Title */}
            {[...Array(7)].map((_, i) => (
                <SkeletonBase key={i} className="h-10 w-full rounded-full" />
            ))}
            <SkeletonBase className="h-6 w-20 mx-auto" /> {/* View More */}
        </div>
    );
};

export default CuisineFilterSkeleton;
