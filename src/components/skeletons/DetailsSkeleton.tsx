import SkeletonBase from "./SkeletonBase";
import { AspectRatio } from "../ui/aspect-ratio";

const DetailsSkeleton = () => {
    return (
        <div className="flex flex-col gap-10">
            {/* 1. Large Image Header */}
            <AspectRatio ratio={16 / 5}>
                <SkeletonBase className="h-full w-full rounded-md" />
            </AspectRatio>

            <div className="grid md:grid-cols-[2fr_1fr] gap-5 md:px-32">
                {/* 2. Left Column: Restaurant Info & Menu */}
                <div className="flex flex-col gap-4">
                    {/* Restaurant Info Card */}
                    <div className="border p-5 rounded-lg space-y-2">
                        <SkeletonBase className="h-8 w-48" />
                        <SkeletonBase className="h-4 w-full" />
                        <SkeletonBase className="h-4 w-3/4" />
                    </div>

                    {/* Menu Items List */}
                    <div className="flex flex-col gap-4">
                        <SkeletonBase className="h-8 w-32 mt-4" />
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="flex justify-between border p-3 rounded-md"
                            >
                                <div className="space-y-2">
                                    <SkeletonBase className="h-5 w-32" />
                                    <SkeletonBase className="h-4 w-20" />
                                </div>
                                <SkeletonBase className="h-10 w-10 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Right Column: Checkout/Cart Card */}
                <div>
                    <div className="border p-5 rounded-lg space-y-4">
                        <SkeletonBase className="h-6 w-full" />
                        <div className="space-y-2">
                            <SkeletonBase className="h-4 w-full" />
                            <SkeletonBase className="h-4 w-full" />
                        </div>
                        <SkeletonBase className="h-10 w-full rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSkeleton;
