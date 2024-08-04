"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { FILTERS_KEY } from "../../home/constants/filters";
import { useFiltersCharacters } from "../../home/hooks/useFiltersCharacters";
import useFiltersInput from "../hooks/useFiltersInput";
import SearchInput from "./SearchInput";
import ContentFilters from "./ContentFilters";

export type FiltersKeyAvailable = "character" | "species"

const data: DataFilters[] = [
  {
    id: "character",
    title: "Character",
    items: [
      {
        value: "ALL",
        name: "All",
      },
      {
        name: "Starred",
        value: "STARRED",
      },
      {
        name: "Others",
        value: "OTHERS",
      },
    ],
  },
  {
    id: "species",
    title: "Species",
    items: [
      {
        value: "ALL",
        name: "All",
      },
      {
        name: "Human",
        value: "HUMAN",
      },
      {
        name: "Alien",
        value: "ALIEN",
      },
    ],
  },
] as const;



// Definimos el tipo `DataFilters` con `id` dependiente de los valores de `id` en `data`
export type DataFilters = {
  id: FiltersKeyAvailable;
  title: string;
  items: DataFiltersItem[];
};


export type FiltersInputsProps = {
  value: string;
};

export type DataFiltersItem = {
  name: string;
  value: keyof typeof FILTERS_KEY;
};



export default function FiltersInput({ value }: FiltersInputsProps) {
  const {
    isMobile,
    showFilterPopup,
    showFilterSheet,
    setShowFilterPopup,
    setShowFilterSheet,
    search,
    onChange,
    handleOpenPopUp,
  } = useFiltersInput(value);

  return (
    <>
      {!isMobile ? (
        <>
          <Popover open={showFilterPopup} onOpenChange={setShowFilterPopup}>
            <SearchInput
              onChange={onChange}
              value={search}
              onClick={handleOpenPopUp}
              isPopover
            />
            <PopoverContent className="w-[23vw] mt-2">
              <ContentFilters
                items={data}
                onClickPopover={() => {
                  console.log("Click outside");
                  setShowFilterPopup(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <>
          <SearchInput
            onChange={onChange}
            value={search}
            onClick={handleOpenPopUp}
            isPopover={false}
          />
          <Sheet open={showFilterSheet} onOpenChange={setShowFilterSheet}>
            <SheetContent side={"bottom"} className="h-[90vh]">
              <ContentFilters
                items={data}
                onClickPopover={() => {
                  console.log("Click outside sheet");
                  setShowFilterSheet(false);
                }}
              />
            </SheetContent>
          </Sheet>
        </>
      )}
    </>
  );
}
