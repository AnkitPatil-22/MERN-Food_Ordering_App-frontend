import SkeletonBase from "./SkeletonBase";

const UserProfileSkeleton = () => {
    return (
        <div className="space-y-4 bg-gray-50 rounded-lg md:p-10 p-4">
            {/* Title and Description */}
            <div className="space-y-2">
                <SkeletonBase className="h-8 w-40" />
                <SkeletonBase className="h-4 w-64" />
            </div>

            {/* Email Field (Full Width) */}
            <div className="space-y-2">
                <SkeletonBase className="h-4 w-12" />
                <SkeletonBase className="h-10 w-full" />
            </div>

            {/* Name Field (Full Width) */}
            <div className="space-y-2">
                <SkeletonBase className="h-4 w-12" />
                <SkeletonBase className="h-10 w-full" />
            </div>

            {/* Address Row (Three columns on MD) */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                    <SkeletonBase className="h-4 w-24" />
                    <SkeletonBase className="h-10 w-full" />
                </div>
                <div className="flex-1 space-y-2">
                    <SkeletonBase className="h-4 w-12" />
                    <SkeletonBase className="h-10 w-full" />
                </div>
                <div className="flex-1 space-y-2">
                    <SkeletonBase className="h-4 w-20" />
                    <SkeletonBase className="h-10 w-full" />
                </div>
            </div>

            {/* Button */}
            <SkeletonBase className="h-10 w-24" />
        </div>
    );
};

export default UserProfileSkeleton;
