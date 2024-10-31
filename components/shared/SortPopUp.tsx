import { cn } from "lib/utils";
import * as React from "react";
import Image from "next/image";
import arrow from "app/img/ArrowUpDown.png";
export interface IAppProps {}

export function SortPopUp(props: IAppProps) {
  return (
    <div className={cn(" inline-flex items-center gap-1 ml-56 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer")}>
      <Image src={arrow} height={16} width={14} alt="arrow"></Image>
      <span>Сортировка по: <span className="text-orange-500">{}wsw</span></span>
    </div>
  );
}
