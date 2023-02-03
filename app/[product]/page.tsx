import Button from "@/components/Button";
import ProductColors from "@/components/ProductColors";
import Sizes from "@/components/Sizes";
import fetcher from "@/services/fetch";
import Image from "next/image";
import React from "react";

export default async function page(context: any) {
  const id = context.params.product;
  const productArray = await fetcher(`/api/products/${id}`);
  const product = productArray[0];
  return (
    <div>
      <Image
        className="w-full mx-auto"
        src={product.photo}
        alt={product.title}
        width={428}
        height={428}
      />
      <h1>{product.title}</h1>
      {/* <div><span>Colors:</span><ProductColors Colors={product?.colors}/></div> */}
      <div>
        <span>Sizes:</span>
        <Sizes />
      </div>
      <p>{product.overview}</p>
      <div className="flex flex-col w-full items-stretch">
        <Button addedClass={"w-80"} data="Add To Cart" type="button" />
        <Button addedClass={"w-80"} data="Add To Wishlist" type="button" />
      </div>
    </div>
  );
}
