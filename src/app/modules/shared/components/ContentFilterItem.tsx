import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DataFiltersItem, FiltersKeyAvailable } from "./FiltersInput";

export type ContentFilterItemProps = {
  id: FiltersKeyAvailable
  title: string;
  items: DataFiltersItem[];
  isFilterSelected: (
    filterType: FiltersKeyAvailable,
    filterValue: string
  ) => boolean;
  handleClickFilter: (
    filterType: FiltersKeyAvailable,
    value: string
  ) => void;
};
export default function ContentFilterItem({
  title,
  items,
  handleClickFilter,
  isFilterSelected,
  id
}: ContentFilterItemProps) {
  

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="" className="text-[#6B7280] font-medium text-sm">
        {title}
      </label>
      <div className="flex items-center gap-2 w-full">
        {items.map((item) => (
          <Button
            key={item.name}
            className={cn(
              "w-full",
              isFilterSelected(id, item.value) &&
                "bg-[#EEE3FF] text-[#8054C7]"
            )}
            onClick={() => handleClickFilter(id, item.value)}
            variant={"outline"}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
