"use client";
import * as React from "react";
import { ProductCard } from "./ProductCard";
import { Title } from ".";
import { useIntersection } from "react-use";

export interface IAppProps {
  items: any[];
  title: string;
  categoryId:number
}

export function ProductCardGroup({ items, title,categoryId }: IAppProps) {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(()=>{
    intersection?.isIntersecting?console.log(title):null

  },[categoryId,intersection?.isIntersecting,title])

  return (
    <div className="w-4/5 " id={title} ref={intersectionRef}>
      <Title text={title} className="font-extrabold mb-5"></Title>
      <div className="flex flex-wrap  justify-between ">
        {items.map((item) => {

          return (
            <ProductCard
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}></ProductCard>
          );
        })}
      </div>
    </div>
  );
}
