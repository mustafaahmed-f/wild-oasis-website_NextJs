"use client";

import React from "react";
import FilterBtn from "./FilterBtn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  filter: string;
}

let filterBtnsData: any[] = [
  {
    filter: "all",
    text: "All guests",
  },
  {
    filter: "small",
    text: "1-2",
  },
  {
    filter: "medium",
    text: "3-7",
  },
  {
    filter: "large",
    text: "More than 7",
  },
];

function Filter({ filter }: FilterProps) {
  let searchParams = useSearchParams();
  let pathName = usePathname();
  let router = useRouter();
  let activeFilter = filter ?? "all";
  function handleFilter(filter: string): void {
    let params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {filterBtnsData.map((data, i) => (
        <FilterBtn
          key={i}
          filter={data.filter}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {data.text}
        </FilterBtn>
      ))}
    </div>
  );
}

export default Filter;
