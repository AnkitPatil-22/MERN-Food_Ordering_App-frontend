import { useSearchRestaurant } from "@/api/RestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { type SearchForm } from "@/components/Searchbar";
import SearchResultCard from "@/components/SearchResultCard";
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
        setSearchState((prevState) => ({
            ...prevState,
            selectedCuisines,
            page: 1,
        }));
    }, []);

    const setSortOption = useCallback((sortOption: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            sortOption,
            page: 1,
        }));
    }, []);

    const setPage = useCallback((page: number) => {
        setSearchState((prevState) => ({
            ...prevState,
            page,
        }));
    }, []);

    const setSearchQuery = useCallback((searchFormData: SearchForm) => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: searchFormData.searchQuery,
            page: 1,
        }));
    }, []);

    const resetSearch = useCallback(() => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: "",
            page: 1,
        }));
    }, []);

    const handleExpandedClick = useCallback(() => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    }, []);

    if (!city) {
        return <span>No results found</span>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="cuisines-list">
                <CuisineFilter
                    selectedCuisines={searchState.selectedCuisines}
                    onChange={setSelectedCuisines}
                    isExpanded={isExpanded}
                    onExpandedClick={handleExpandedClick}
                />
            </div>
            <div id="main-content" className="flex flex-col gap-5">
                <SearchBar
                    searchQuery={searchState.searchQuery}
                    onSubmit={setSearchQuery}
                    placeHolder="Search by Cuisine or Restaurant Name"
                    onReset={resetSearch}
                />

                {isPending ? (
                    <div className="flex justify-center py-10">
                        <span className="text-gray-500 text-lg font-medium">
                            Loading delicious options...
                        </span>
                    </div>
                ) : !results?.data || results.data.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                        <span className="text-xl font-bold mb-2">
                            No results found
                        </span>
                        <p>
                            Try clearing your filters or searching for something
                            else.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between flex-col gap-3 lg:flex-row">
                            <SearchResultInfo
                                total={results.pagination.total}
                                city={city}
                            />
                            <SortOptionDropdown
                                sortOption={searchState.sortOption}
                                onChange={setSortOption}
                            />
                        </div>

                        {results.data.map((restaurant) => (
                            <SearchResultCard
                                key={restaurant._id}
                                restaurant={restaurant}
                            />
                        ))}

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
