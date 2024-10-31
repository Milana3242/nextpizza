"use client";
import { cn } from "lib/utils";
import Link from "next/link";
import * as React from "react";

export interface IAppProps {}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];

export function Categories(props: IAppProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function changeActiveIndex(i: any) {
    setActiveIndex(i);
    console.log(activeIndex)
  }

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl")}>
      {cats.map((name, i) => (
        <Link
          onClick={(i) => changeActiveIndex(i)}
          key={i}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-orange-500"
          )}
          href="">
          <button>{name}</button>
        </Link>
      ))}
    </div>
  );
}
