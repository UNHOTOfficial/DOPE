import fetcher from "@/services/fetch";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import ProductColors from "./ProductColors";

export default function CartItem({ image, title, price, colors }: any) {
  return (
    <div className="flex flex-row justify-around">
      <Image
        className="w-2/4"
        src={image}
        alt={title}
        width={155}
        height={120}
      />
      <div className="flex flex-col w-3/4">
        <span>{title}</span>
        <div className="flex flex-row items-center justify-around">
          <span>Color:</span>
          <ProductColors colors={colors} />
        </div>
        <div className="flex flex-row items-center justify-around">
          <span>Size:</span>43
        </div>
        <div className="flex flex-row items-center justify-around">
          <span>Quantity:</span>1
        </div>
        <div className="flex flex-row items-center justify-around">
          <span>Price:</span>
          ${price}
        </div>
        <Button data="Remove Item" />
      </div>
    </div>
  );
}
