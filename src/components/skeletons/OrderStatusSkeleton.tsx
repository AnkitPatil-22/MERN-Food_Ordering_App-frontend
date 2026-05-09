import { AspectRatio } from "../ui/aspect-ratio";
import SkeletonBase from "./SkeletonBase";

const OrderStatusSkeleton = () => {
    return (
        <div className="space-y-10">
            {[1, 2].map((i) => (
                <div key={i} className="space-y-10 bg-gray-50 p-10 rounded-lg">
                    {/* Header Area (Status and Time) */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-2">
                            <SkeletonBase className="h-8 w-64" />
                            <SkeletonBase className="h-4 w-40" />
                        </div>
                        <SkeletonBase className="h-10 w-32" />
                    </div>

                    <div className="grid gap-10 md:grid-cols-2">
                        {/* Details Area */}
                        <div className="space-y-4">
                            <SkeletonBase className="h-6 w-32" />{" "}
                            {/* Delivery Address Label */}
                            <SkeletonBase className="h-4 w-full" />
                            <SkeletonBase className="h-4 w-3/4" />
                            <div className="pt-4 space-y-2">
                                <SkeletonBase className="h-6 w-24" />{" "}
                                {/* Your Order Label */}
                                <SkeletonBase className="h-4 w-full" />
                                <SkeletonBase className="h-4 w-full" />
                            </div>
                        </div>

                        {/* Image Area */}
                        <AspectRatio ratio={16 / 5}>
                            <SkeletonBase className="w-full h-full rounded-md" />
                        </AspectRatio>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderStatusSkeleton;
