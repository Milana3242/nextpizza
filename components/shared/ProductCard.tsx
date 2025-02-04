import Link from "next/link";
import * as React from "react";
import { Title } from ".";

export interface IAppProps {
  id?: number;
  name: string;
  imageUrl: any;
  price?: number;
}

export function ProductCard({ id, name, imageUrl, price }: IAppProps) {
  return (
    <Link className="w-[285px] mr-6 mb-12" href={"/"}>
      <div className="flex justify-center p-6 bg-orange-50 rounded-lg h-[260px]">
        <img className="w-[225px] h-[225px]" src={imageUrl} alt="pizza"></img>
      </div>

      <Title text={name}></Title>

      <div className="text-sm text-gray-400">Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок</div>

      <div className="flex justify-between mt-3">
        <div>от {price} р.</div>
        <div><button className="text-orange-500">+Добавить</button></div>
      </div>
    </Link>
  );
}
