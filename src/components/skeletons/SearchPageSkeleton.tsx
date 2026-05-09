import CuisineFilterSkeleton from "./CuisineFilterSkeleton";
import SearchResultCardSkeleton from "./SearchResultCardSkeleton";
import SkeletonBase from "./SkeletonBase";

const SearchPageSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <CuisineFilterSkeleton />
        <div className="flex flex-col gap-5">
            <SkeletonBase className="h-14 w-full rounded-full" />{" "}
            {/* Search Bar */}
            <div className="flex flex-col gap-5">
                {[1, 2, 3].map((i) => (
                    <SearchResultCardSkeleton key={i} />
                ))}
            </div>
        </div>
    </div>
);

export default SearchPageSkeleton;
