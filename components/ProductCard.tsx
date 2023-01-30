import Image from "next/image";
import React from "react";
import ProductColors from "./ProductColors";
import Rating from "./ProductRating";
export default function ProductCard({photo, title, price,rate,count }:any) {
  return (
    <div className="flex flex-col w-40 border border-black rounded-md">
      <Image
        className="rounded-t-md"
        src={photo}
        width={250}
        height={200}
        alt={title}
      />
      <div className="py-1 px-3">
        <Rating rate={rate} count={count}/>
        <h5>{title}</h5>
        <ProductColors />
        <span>{price}</span>
      </div>
    </div>
  );
}
