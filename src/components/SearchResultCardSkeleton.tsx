import { AspectRatio } from "./ui/aspect-ratio";

const SearchResultCardSkeleton = () => {
    return (
        <div className="grid lg:grid-cols-[2fr_3fr] gap-5 animate-pulse">
            {/* Image Skeleton */}
            <AspectRatio ratio={16 / 6}>
                <div className="w-full h-full bg-gray-300 rounded-md" />
            </AspectRatio>

            {/* Content */}
            <div>
                {/* Title */}
                <div className="h-6 w-3/4 bg-gray-300 rounded mb-3" />

                <div className="grid md:grid-cols-2 gap-2">
                    {/* Cuisines */}
                    <div className="flex gap-2 flex-wrap">
                        <div className="h-4 w-16 bg-gray-300 rounded" />
                        <div className="h-4 w-12 bg-gray-300 rounded" />
                        <div className="h-4 w-20 bg-gray-300 rounded" />
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col gap-2">
                        <div className="h-4 w-24 bg-gray-300 rounded" />
                        <div className="h-4 w-32 bg-gray-300 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCardSkeleton;
