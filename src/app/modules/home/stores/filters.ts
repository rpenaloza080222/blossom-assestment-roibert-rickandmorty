import { create } from "zustand"
import { FILTERS_KEY } from "../constants/filters"


export type FiltersState = {
    filters: {
        species: string
        character: string
    }
    initFilters: (filters: Partial<FiltersState>) => void
    set: (filters: Partial<FiltersState>) => void
}

export const useFiltersStore = create<FiltersState>()((set) => ({
    filters: {
        species: FILTERS_KEY.ALL,
        character: FILTERS_KEY.ALL
    },
    initFilters: (filters) => {
        set((state) => ({ ...state, ...filters }))
    },
    set: (filters) => {
        set((state) => ({ ...state, ...filters }))
    }
}))