import { AspectRatio } from "../ui/aspect-ratio";
import SkeletonBase from "./SkeletonBase";

const SearchResultCardSkeleton = () => {
    return (
        <div className="grid lg:grid-cols-[2fr_3fr] gap-5">
            {/* Image Skeleton */}
            <AspectRatio ratio={16 / 6}>
                <SkeletonBase className="w-full h-full" />
            </AspectRatio>

            {/* Content */}
            <div className="flex flex-col">
                {/* Title */}
                <SkeletonBase className="h-7 w-3/4 mb-4" />

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Cuisines Section */}
                    <div className="flex gap-2 flex-wrap">
                        <SkeletonBase className="h-5 w-16" />
                        <SkeletonBase className="h-5 w-12" />
                        <SkeletonBase className="h-5 w-20" />
                    </div>

                    {/* Delivery Details Section */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <SkeletonBase className="h-4 w-4 rounded-full" />{" "}
                            {/* Icon placeholder */}
                            <SkeletonBase className="h-4 w-24" />
                        </div>
                        <div className="flex items-center gap-2">
                            <SkeletonBase className="h-4 w-4 rounded-full" />{" "}
                            {/* Icon placeholder */}
                            <SkeletonBase className="h-4 w-32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCardSkeleton;
