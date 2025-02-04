"use client";
import * as React from "react";
import { FilterCheckbox } from ".";
import { Input } from "../ui";
import { it } from "node:test";

type Item = {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export interface IAppProps {
  title: string;
  items: Item[];
  defaultItem: Item[];
  limit: number;
  searchInputPlaceHolder: string;
  onChange?: (values: string[]) => void;
  defaultValue: string;
  className?: string;
}

export function CheckBoxFilterGroup({
  title,
  items,
  defaultItem,
  limit,
  searchInputPlaceHolder,
  onChange,
  defaultValue,
  className,
}: IAppProps) {
  const [showAll, setShowAll] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const list = showAll ? items.filter(item=>item.text.toLowerCase().includes(search.toLowerCase())) : defaultItem.slice(0, limit);

  return (
    <div>
      <p>{title}:</p>
      <div className="mb-5">
        {showAll ? (
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchInputPlaceHolder}
            className="bg-gray-50 border-none"
          />
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox key={index} text={item.text} value={item.value} />
        ))}
      </div>

      {items.length > limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className=" text-orange-500 mt-3">
          {showAll ? "Скрыть" : "+ Показать все"}
        </button>
      )}
    </div>
  );
}
