import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductColors from "./ProductColors";
import Rating from "./ProductRating";
export default function ProductCard({
  id,
  photo,
  title,
  price,
  rate,
  count,
  colors,
}: any) {
  return (
    <div className="flex flex-col w-40 border border-black rounded-md">
      <Link href={`/${id}`}>
        <Image
          className="rounded-t-md"
          src={photo}
          width={250}
          height={200}
          alt={title}
        />
      </Link>
      <div className="py-1 px-3">
        <Rating rate={rate} count={count} />
        <Link href={`/${id}`}>
          <span>{title}</span>
        </Link>
        <ProductColors colors={colors} />
        <span>${price}</span>
      </div>
    </div>
  );
}
