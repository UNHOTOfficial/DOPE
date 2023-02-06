import Image from "next/image";
import React from "react";

export default function CategoryItem({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 relative">
        <Image
          className="object-cover rounded-sm"
          src={image}
          alt={title}
          fill
        />
      </div>
      <span>{title}</span>
    </div>
  );
}
