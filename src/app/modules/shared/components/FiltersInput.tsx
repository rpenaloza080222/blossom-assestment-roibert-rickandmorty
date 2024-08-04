"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopOverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FILTERS_KEY } from "../../home/constants/filters";
import { useFiltersCharacters } from "../../home/hooks/useFiltersCharacters";
import { FiltersIcon } from "./FiltersIcon";
import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export type FiltersInputsProps = {
  value: string;
};

export type ContentFiltersProps = {
  onClickPopover: () => void;
};

const ContentFilters = (props: ContentFiltersProps) => {
  const { onClickPopover } = props;
  const { handleClickFilter, filter, isFilterSelected } = useFiltersCharacters({
    onClickPopover,
  });

  return (
    <div className="flex flex-col gap-4 p-4 w-full z-30">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="text-[#6B7280] font-medium text-sm">
          Character
        </label>
        <div className="flex items-center gap-2 w-full">
          <Button
            className={cn(
              "w-full",
              isFilterSelected("character", FILTERS_KEY.ALL) &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter("character", FILTERS_KEY.ALL)}
            variant={"outline"}
          >
            All
          </Button>
          <Button
            className={cn(
              "w-full",
              isFilterSelected("character", "STARRED") &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter("character", "STARRED")}
            variant={"outline"}
          >
            Starred
          </Button>
          <Button
            className={cn(
              "w-full",
              isFilterSelected("character", "OTHERS") &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter("character", "OTHERS")}
            variant={"outline"}
          >
            Others
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="text-[#6B7280] font-medium text-sm">
          Specie
        </label>
        <div className="flex items-center gap-2 w-full">
          <Button
            className={cn(
              "w-full",
              isFilterSelected("species", FILTERS_KEY.ALL) &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter("species", FILTERS_KEY.ALL)}
            variant={"outline"}
          >
            All
          </Button>
          <Button
            className={cn(
              "w-full",
              isFilterSelected("species", FILTERS_KEY.HUMAN) &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter("species", FILTERS_KEY.HUMAN)}
            variant={"outline"}
          >
            Human
          </Button>
          <Button
            className={cn(
              "w-full",
              isFilterSelected("species", FILTERS_KEY.ALIEN) &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter("species", FILTERS_KEY.ALIEN)}
            variant={"outline"}
          >
            Alien
          </Button>
        </div>
      </div>
      <Button onClick={filter} className="w-full" variant={"default"}>
        Filter
      </Button>
    </div>
  );
};

export default function FiltersInput({ value }: FiltersInputsProps) {
  const [search, setSearch] = useState(value);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleResize = () => {
    console.log("Resize listener");
    const { innerHeight: height, innerWidth: width } = window;
    setSize({
      width,
      height,
    });
  };

  const isMobile = size.width <= 768;
  console.log("Resize is mobile", isMobile, size);

  useEffect(() => {
    console.log("Resize");

    handleResize();
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("Value", value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    setSearch(value);
    replace(`${pathname}?${params.toString()}`);
  };

  const handleOpenPopUp = () => {
    if (!isMobile) return setShowFilterPopup(!showFilterPopup);
  };

  return (
    <>
      {!isMobile ? (
        <Popover open={showFilterPopup} onOpenChange={setShowFilterPopup}>
          <PopOverAnchor asChild>
            <SearchInput
              onChange={onChange}
              value={search}
              onClick={handleOpenPopUp}
            />
          </PopOverAnchor>
          <PopoverContent className="w-[23vw] mt-2">
            <ContentFilters onClickPopover={() => setShowFilterPopup(false)} />
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <Sheet  open={showFilterPopup} onOpenChange={setShowFilterPopup}>
            <SheetTrigger>
              <SearchInput
                onChange={onChange}
                value={search}
                onClick={handleOpenPopUp}
              />
            </SheetTrigger>
            <SheetContent side={"bottom"} className="h-[90vh]">
              <ContentFilters
                onClickPopover={() => setShowFilterPopup(false)}
              />
            </SheetContent>
          </Sheet>
        </>
      )}
    </>
  );
}
