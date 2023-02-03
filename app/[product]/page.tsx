import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/Button";
import ProductColors from "@/components/ProductColors";
import Sizes from "@/components/Sizes";
import fetcher from "@/services/fetch";
import { log } from "console";
import Image from "next/image";
import React from "react";

export default async function page(context: any) {
  const id = context.params.product;
  const productArray = await fetcher(`/api/products/${id}`);
  const product = productArray[0];
  log(product);
  return (
    <div className="space-y-3">
      <BreadCrumb />
      <Image
        className="w-full mx-auto"
        src={product.photo}
        alt={product.title}
        width={428}
        height={428}
      />
      <h1 className="text-3xl font-semibold mt-1">{product.title}</h1>
      <div className="flex flex-row">
        <span>Colors:</span>
        <ProductColors Colors={product?.colors} />
      </div>
      <div className="flex flex-row">
        <span>Sizes:</span>
        <Sizes sizes={product.sizes} />
      </div>
      <p>{product.overview}</p>
      <div className="flex flex-col w-full items-stretch">
        <Button
          addedClass={
            "w-80 my-1 bg-gray-700 text-white dark:bg-gray-100 dark:text-black"
          }
          data="Add To Cart"
          type="button"
        />
        <Button addedClass={"w-80 my-0"} data="Add To Wishlist" type="button" />
      </div>
    </div>
  );
}
