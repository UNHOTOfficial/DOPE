import fetcher from "@/services/fetch";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import ProductColors from "./ProductColors";

export default function CartItem({
  photo,
  title,
  price,
  colors,
  size,
  quantity,
}: any) {
  return (
    <tr className="border-b dark:border-gray-700 odd:bg-slate-900 last:border-0">
      <td className="px-4 py-3">
        <Image
          className="rounded-sm w-14 h-12 max-w-fit border border-gray-100 dark:border-gray-700"
          src={photo}
          alt={title}
          width={1000}
          height={500}
        />
      </td>
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-4 py-3">
        <ProductColors colors={colors} />
      </td>
      <td className="px-4 py-3">{size}</td>
      <td className="px-4 py-3">${price}</td>
      <td className="px-4 py-3">{quantity}</td>
      <td className="px-4 py-3">
        <div className="flex flex-row justify-between w-10">
          <i className="bi bi-pen text-gray-100"></i>
          <i className="bi bi-x-lg text-gray-100"></i>
        </div>
      </td>
    </tr>
  );
}
