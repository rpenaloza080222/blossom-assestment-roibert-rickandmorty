import { ChangeEventHandler, MouseEventHandler } from "react"
import SearchIcon from "./SearchIcon"
import { Button } from "@/components/ui/button"
import { FiltersIcon } from "./FiltersIcon"

export type SearchInputProps = {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string
    onClick:() => void
}

export default function SearchInput({
    onChange,
    onClick,
    value
}: SearchInputProps){
    return <div className="bg-[#F3F4F6] relative h-14 flex items-center rounded-md p-2 focus-within:ring-2 focus-within:ring-[#E5E7EB] pl-4">
    <SearchIcon />
    <input
      onChange={onChange}
      value={value}
      placeholder="Search or filter results"
      type="search"
      name=""
      id=""
      className="h-full outline-none w-[90%] bg-transparent p-4"
    />
    <Button
      onClick={() => onClick()}
      variant="ghost"
      className=" bg-[#8054C70D] text-primary-600 size-9 rounded-md p-2"
    >
      <FiltersIcon />
    </Button>
  </div>
}