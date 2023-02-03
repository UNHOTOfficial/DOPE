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
    <Link href={`/${id}`}>
      <div className="flex flex-col w-40 border border-gray-100 dark:border-gray-700 rounded-md">
        <Image
          className="rounded-t-md border-b border-gray-100 dark:border-gray-700"
          src={photo}
          width={250}
          height={200}
          alt={title}
          priority
        />
        <div className="py-1 px-3">
          <Rating rate={rate} count={count} />
          <span>{title}</span>
          <ProductColors colors={colors} />
          <span>${price}</span>
        </div>
      </div>
    </Link>
  );
}
