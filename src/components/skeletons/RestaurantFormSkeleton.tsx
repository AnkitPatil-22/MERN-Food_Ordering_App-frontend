import SkeletonBase from "./SkeletonBase";
import { AspectRatio } from "../ui/aspect-ratio";

const RestaurantFormSkeleton = () => {
    return (
        <div className="space-y-10 bg-gray-50 p-6 md:p-10 rounded-lg">
            {/* 1. Details Section */}
            <div className="space-y-4">
                <div>
                    <SkeletonBase className="h-8 w-32 mb-2" />{" "}
                    {/* Section Title */}
                    <SkeletonBase className="h-4 w-64" /> {/* Description */}
                </div>
                <div className="space-y-4">
                    <SkeletonBase className="h-10 w-full" /> {/* Name Input */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <SkeletonBase className="h-10 w-full" /> {/* City */}
                        <SkeletonBase className="h-10 w-full" /> {/* Country */}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <SkeletonBase className="h-10 w-full" /> {/* Price */}
                        <SkeletonBase className="h-10 w-full" />{" "}
                        {/* Delivery Time */}
                    </div>
                </div>
            </div>
            <hr />
            {/* 2. Cuisines Section */}
            <div className="space-y-4">
                <div>
                    <SkeletonBase className="h-8 w-32 mb-2" />
                    <SkeletonBase className="h-4 w-64" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <SkeletonBase className="h-5 w-5 rounded" />{" "}
                            {/* Checkbox */}
                            <SkeletonBase className="h-4 w-20" /> {/* Label */}
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            {/* 3. Menu Section */}
            <div className="space-y-4">
                <div>
                    <SkeletonBase className="h-8 w-32 mb-2" />
                    <SkeletonBase className="h-4 w-64" />
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-end gap-2">
                            <div className="flex-1 space-y-2">
                                <SkeletonBase className="h-4 w-20" />
                                <SkeletonBase className="h-10 w-full" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <SkeletonBase className="h-4 w-20" />
                                <SkeletonBase className="h-10 w-full" />
                            </div>
                            <SkeletonBase className="h-10 w-24 bg-red-100/50" />{" "}
                            {/* Remove Button */}
                        </div>
                    ))}
                </div>
                <SkeletonBase className="h-10 w-36" />{" "}
                {/* Add Menu Item Button */}
            </div>
            <hr />
            {/* 4. Image Section */}
            <div className="space-y-4 md:w-[50%]">
                <div>
                    <SkeletonBase className="h-8 w-32 mb-2" />
                    <SkeletonBase className="h-4 w-64" />
                </div>
                <AspectRatio ratio={16 / 9}>
                    <SkeletonBase className="w-full h-full rounded-md" />
                </AspectRatio>
                <SkeletonBase className="h-10 w-full" /> {/* File Input */}
            </div>
            <SkeletonBase className="h-12 w-32" /> {/* Submit Button */}
        </div>
    );
};

export default RestaurantFormSkeleton;
