import { useSearchParams, usePathname,useRouter } from "next/navigation";

import { ChangeEvent, useEffect, useState } from "react";

export default function useFiltersInput(value: string) {
  const [search, setSearch] = useState(value);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleResize = () => {
    const { innerHeight: height, innerWidth: width } = window;
    setSize({
      width,
      height,
    });
  };

  const isMobile = size.width <= 768;

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
    console.log("Click");
    if (!isMobile)
      return setShowFilterPopup((showFilterPopup) => !showFilterPopup);
    return setShowFilterSheet((showFilterSheet) => !showFilterSheet);
  };

  return {
    search,
    onChange,
    handleOpenPopUp,
    showFilterPopup,
    showFilterSheet,
    setShowFilterPopup,
    setShowFilterSheet,
    isMobile
  }
}
