"use client";
import { Button } from "@/components/ui/button";
import { FiltersIcon } from "./FiltersIcon";
import { ChangeEvent, useState } from "react";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import SearchIcon from "./SearchIcon";
import {
  Popover,
  PopOverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FILTERS_KEY } from "../../home/constants/filters";

export type FiltersInputsProps = {
  value: string;
};

const PopoverContentFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClickFilter = (
    filterType: "character" | "species",
    value: string
  ) => {
    console.log("clicknh");
    if (filterType === "character") {
      console.log("character");
    } else {
      console.log("Value", value);
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(filterType, value);
      } else {
        params.delete(filterType);
      }
      replace(`${pathname}?${params.toString()}`);
    }
  };
  return (
    <div className="flex flex-col gap-4 p-4 w-full z-30">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="text-[#6B7280] font-medium text-sm">
          Character
        </label>
        <div className="flex items-center gap-2 w-full">
          <Button
            className="w-full"
            onClick={() => handleClickFilter("character", FILTERS_KEY.ALL)}
            variant={"outline"}
          >
            All
          </Button>
          <Button
            className="w-full"
            onClick={() => handleClickFilter("character", "STARRED")}
            variant={"outline"}
          >
            Starred
          </Button>
          <Button
            className="w-full"
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
            className="w-full"
            onClick={() => handleClickFilter("species", FILTERS_KEY.ALL)}
            variant={"outline"}
          >
            All
          </Button>
          <Button
            className="w-full"
            onClick={() => handleClickFilter("species", FILTERS_KEY.HUMAN)}
            variant={"outline"}
          >
            Human
          </Button>
          <Button
            className="w-full"
            onClick={() => handleClickFilter("species", FILTERS_KEY.ALIEN)}
            variant={"outline"}
          >
            Alien
          </Button>
        </div>
      </div>
      <Button
        onClick={() => handleClickFilter("species", FILTERS_KEY.ALIEN)}
        className="w-full"
        variant={"default"}
      >
        Filter
      </Button>
    </div>
  );
};

export default function FiltersInput({ value }: FiltersInputsProps) {
  const [search, setSearch] = useState(value);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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

  const handleClickFilter = (
    filterType: "character" | "species",
    value: string
  ) => {
    console.log("clicknh");
    if (filterType === "character") {
      console.log("clicknh");
    } else {
      console.log("Value", value);
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(filterType, value);
      } else {
        params.delete(filterType);
      }
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <Popover open={showFilterPopup} onOpenChange={setShowFilterPopup}>
      <PopOverAnchor asChild>
        <div className="bg-[#F3F4F6] relative h-14 flex items-center rounded-md p-2 focus-within:ring-2 focus-within:ring-[#E5E7EB] pl-4">
          <SearchIcon />
          <input
            onChange={onChange}
            value={search}
            placeholder="Search or filter results"
            type="search"
            name=""
            id=""
            className="h-full outline-none w-[90%] bg-transparent p-4"
          />
          <Button
            onClick={() => setShowFilterPopup(!showFilterPopup)}
            variant="ghost"
            className=" bg-[#8054C70D] text-primary-600 size-9 rounded-md p-2"
          >
            <FiltersIcon />
          </Button>
        </div>
      </PopOverAnchor>
      <PopoverContent
        className="w-[23vw] mt-2"
        sideOffset={25}
      >
        <PopoverContentFilters />
      </PopoverContent>
    </Popover>
  );
}
