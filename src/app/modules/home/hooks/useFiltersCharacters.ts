import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFiltersStore } from "../stores/filters";
import { useEffect } from "react";
import { FILTERS_KEY } from "../constants/filters";
import { FiltersKeyAvailable } from "../../shared/components/FiltersInput";

export type FilterCharactersParams = {
    onClickPopover: () => void
}

/**
 * Custom hook that manages character filters.
 *
 * @param {FilterCharactersParams} onClickPopover - Callback function to be called when the popover is clicked.
 * @return {Object} An object containing the following properties:
 *   - handleClickFilter: Function to handle filter selection.
 *   - isFilterSelected: Function to check if a filter is selected.
 *   - filters: The current filters state.
 *   - filter: Function to apply the filters and update the URL.
 */

export const useFiltersCharacters = ({ onClickPopover }: FilterCharactersParams) => {
    const searchParams = useSearchParams();
    const filters = useFiltersStore((state) => state.filters);
    const setFilters = useFiltersStore((state) => state.set);
    const initFilters = useFiltersStore((state) => state.initFilters);

    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClickFilter = (
        filterType: "character" | "species",
        value: string
    ) => {
        console.log("clicknh");
        setFilters({
            filters: {
                ...filters,
                [filterType]: value
            }
        })

    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        initFilters({
            filters: {
                species: params.get("species") ?? FILTERS_KEY.ALL,
                character: params.get("character") ?? FILTERS_KEY.ALL
            }
        })
    }, [initFilters, searchParams])

    const isFilterSelected = (filterType: FiltersKeyAvailable, filterValue: string) => {
        return filters[filterType] === filterValue
    }

    const filter = () => {
        console.log("Filter");
        const params = new URLSearchParams(searchParams);
        Object.keys(filters).forEach((key) => {
            const keyParse = key as keyof typeof filters
            params.set(key, filters[keyParse])
        })
        replace(`${pathname}?${params.toString()}`);
        onClickPopover();
    }

    return {
        handleClickFilter,
        isFilterSelected,
        filters,
        filter
    }
}