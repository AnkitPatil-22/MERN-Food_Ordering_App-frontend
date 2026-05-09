import SkeletonBase from "./SkeletonBase";

const OrdersSkeleton = () => {
    return (
        <div className="space-y-5 bg-gray-50 p-10 rounded-lg">
            <SkeletonBase className="h-8 w-48 mb-4" />{" "}
            {/* "X active orders" text */}
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="bg-white p-6 rounded-lg border flex flex-col gap-4"
                >
                    <div className="flex justify-between">
                        <SkeletonBase className="h-6 w-1/4" />
                        <SkeletonBase className="h-6 w-1/4" />
                        <SkeletonBase className="h-6 w-1/4" />
                    </div>
                    <div className="space-y-2 py-4 border-y">
                        <SkeletonBase className="h-4 w-1/3" />
                        <SkeletonBase className="h-4 w-1/4" />
                    </div>
                    <div className="flex justify-between items-center">
                        <SkeletonBase className="h-4 w-32" />
                        <SkeletonBase className="h-10 w-40" />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default OrdersSkeleton;
