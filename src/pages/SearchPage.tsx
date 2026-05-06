import { useSearchRestaurant } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { type SearchForm } from "@/components/Searchbar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultCardSkeleton from "@/components/SearchResultCardSkeleton";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
    searchQuery: string;
    page: number;
    selectedCuisines: string[];
    sortOption: string;
};

const SearchPage = () => {
    const { city } = useParams();

    const [searchState, setSearchState] = useState<SearchState>({
        searchQuery: "",
        page: 1,
        selectedCuisines: [],
        sortOption: "bestMatch",
    });

    const [isExpanded, setIsExpanded] = useState(false);

    const { results, isPending } = useSearchRestaurant(searchState, city);

    const setSelectedCuisines = useCallback((selectedCuisines: string[]) => {
        setSearchState((prev) => ({ ...prev, selectedCuisines, page: 1 }));
    }, []);

    const setSortOption = useCallback((sortOption: string) => {
        setSearchState((prev) => ({ ...prev, sortOption, page: 1 }));
    }, []);

    const setPage = useCallback((page: number) => {
        setSearchState((prev) => ({ ...prev, page }));
    }, []);

    const setSearchQuery = useCallback((data: SearchForm) => {
        setSearchState((prev) => ({
            ...prev,
            searchQuery: data.searchQuery,
            page: 1,
        }));
    }, []);

    const resetSearch = useCallback(() => {
        setSearchState((prev) => ({
            ...prev,
            searchQuery: "",
            page: 1,
        }));
    }, []);

    const handleExpandedClick = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    if (!city) return <span>No results found</span>;

    const hasNoResults = !results?.data || results.data.length === 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            {/* Sidebar */}
            <div id="cuisines-list">
                <CuisineFilter
                    selectedCuisines={searchState.selectedCuisines}
                    onChange={setSelectedCuisines}
                    isExpanded={isExpanded}
                    onExpandedClick={handleExpandedClick}
                />
            </div>

            {/* Main */}
            <div id="main-content" className="flex flex-col gap-5">
                <SearchBar
                    searchQuery={searchState.searchQuery}
                    onSubmit={setSearchQuery}
                    placeHolder="Search by Cuisine or Restaurant Name"
                    onReset={resetSearch}
                />

                <div className="flex justify-between flex-col gap-3 lg:flex-row">
                    <SearchResultInfo
                        total={results?.pagination?.total || 0}
                        city={city}
                    />
                    <SortOptionDropdown
                        sortOption={searchState.sortOption}
                        onChange={setSortOption}
                        isLoading={isPending}
                    />
                </div>

                {/* Loading */}
                {isPending && (
                    <div className="flex flex-col gap-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <SearchResultCardSkeleton key={`skeleton-${i}`} />
                        ))}
                    </div>
                )}

                {/* Empty */}
                {!isPending && hasNoResults && (
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                        <span className="text-xl font-bold mb-2">
                            No results found
                        </span>
                        <p>
                            Try clearing your filters or searching for something
                            else.
                        </p>
                    </div>
                )}

                {/* Results */}
                {!isPending && !hasNoResults && (
                    <>
                        <div className="flex flex-col gap-5">
                            {results.data.map((restaurant) => (
                                <SearchResultCard
                                    key={restaurant._id}
                                    restaurant={restaurant}
                                />
                            ))}
                        </div>

                        <PaginationSelector
                            page={results.pagination.page}
                            pages={results.pagination.pages}
                            onPageChange={setPage}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
