import { Button } from "@/components/ui/button";
import { useFiltersCharacters } from "../../home/hooks/useFiltersCharacters";
import ContentFilterItem from "./ContentFilterItem";
import { DataFiltersItem, FiltersKeyAvailable } from "./FiltersInput";

export type ContentFiltersProps = {
  onClickPopover: () => void;
  items: {
    id:FiltersKeyAvailable;
    title: string;
    items: DataFiltersItem[];
  }[];
};

export default function ContentFilters(props: ContentFiltersProps) {
  const { onClickPopover, items } = props;
  const { handleClickFilter, filter, isFilterSelected } = useFiltersCharacters({
    onClickPopover,
  });

  return (
    <div className="flex flex-col gap-4 p-4 w-full z-30">
      {items.map((item) => (
        <ContentFilterItem
          id={item.id}
          title={item.title}
          key={item.id}
          items={item.items}
          isFilterSelected={isFilterSelected}
          handleClickFilter={handleClickFilter}
        />
      ))}
      <Button onClick={filter} className="w-full" variant={"default"}>
        Filter
      </Button>
    </div>
  );
}
