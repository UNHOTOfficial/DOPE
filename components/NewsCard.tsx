import Image from "next/image";
import React from "react";

export default function NewsCard({
  photo,
  title,
  author,
  authorPhoto,
  overview,
  readingTime,
}: any) {
  return (
    <div className="w-44 flex flex-col border border-gray-100 dark:border-gray-700 rounded-md">
      <div className="relative w-44 h-28 object-cover">
        <Image src={photo} alt={title} fill />
      </div>
      <div className="p-2">
        <span className="capitalize">{title}</span>
        <div className="flex flex-row items-center">
          <div className="relative w-8 h-8 object-contain mr-2 my-2">
            <Image
              className="rounded-full"
              src={authorPhoto}
              alt={author}
              fill
            />
          </div>
          <span className="text-gray-400 text-sm">{author}</span>
        </div>
        <p className="text-sm">{overview}</p>
        <span>{readingTime} Minutes</span>
      </div>
    </div>
  );
}
