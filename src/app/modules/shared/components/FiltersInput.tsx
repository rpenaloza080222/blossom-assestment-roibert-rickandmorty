"use client"
import { Button } from "@/components/ui/button"
import { FiltersIcon } from "./FiltersIcon"
import { ChangeEvent, useState } from "react"
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation"
import SearchIcon from "./SearchIcon"
import { Popover, PopOverAnchor, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export type FiltersInputsProps = {
    value: string
}

export default function FiltersInput({ value }: FiltersInputsProps) {
    const [search, setSearch] = useState(value)
    const [showFilterPopup, setShowFilterPopup] = useState(false)
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log("Value", value)
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('q', value);
        } else {
            params.delete('q');
        }
        setSearch(value)
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <Popover open={showFilterPopup} onOpenChange={setShowFilterPopup}>
            <PopOverAnchor asChild>
                <div className="bg-[#F3F4F6] relative h-14 flex items-center rounded-md p-2 :focus-within:ring-2 :focus-within:ring-blue-500">
                    <SearchIcon />
                    <input onChange={onChange} value={search} placeholder="Search or filter results" type="search" name="" id="" className="h-full outline-none w-[90%] bg-transparent p-4" />
                    <Button onClick={() => setShowFilterPopup(!showFilterPopup)} variant="ghost" className=" bg-[#8054C70D] text-primary-600 size-9 rounded-md p-2">
                        <FiltersIcon />
                    </Button>
                </div>
            </PopOverAnchor>
            <PopoverContent className="w-[24vw]">Place content for the popover here.</PopoverContent>
        </Popover>

    )
}