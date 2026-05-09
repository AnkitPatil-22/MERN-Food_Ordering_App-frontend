import SkeletonBase from "./SkeletonBase";

const HomeSkeleton = () => {
    return (
        <div className="flex flex-col gap-12">
            {/* Search Card Skeleton */}
            <div className="bg-white rounded-lg shadow-md py-8 md:px-32 px-8 flex flex-col gap-5 text-center -mt-16 z-10 mx-auto w-[90%]">
                <SkeletonBase className="h-12 w-3/4 mx-auto" />
                <SkeletonBase className="h-6 w-1/2 mx-auto" />
                <SkeletonBase className="h-14 w-full rounded-full" />
            </div>

            {/* Bottom Grid Skeleton */}
            <div className="grid md:grid-cols-2 gap-5 px-4">
                <SkeletonBase className="h-[400px] w-full" />
                <div className="flex flex-col items-center justify-center gap-4">
                    <SkeletonBase className="h-10 w-2/3" />
                    <SkeletonBase className="h-16 w-full" />
                    <SkeletonBase className="h-12 w-48" />
                </div>
            </div>
        </div>
    );
};

export default HomeSkeleton;
