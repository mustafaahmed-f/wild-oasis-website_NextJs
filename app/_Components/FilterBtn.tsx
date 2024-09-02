import React from "react";

interface FilterBtnProps {
  handleFilter: (filter: string) => void;
  filter: string;
  children: string;
  activeFilter: string;
}

function FilterBtn({
  children,
  handleFilter,
  filter,
  activeFilter,
}: FilterBtnProps) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`bg-transparent px-2 py-1 rounded-sm hover:bg-primary-700 border-primary-950 ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default FilterBtn;
