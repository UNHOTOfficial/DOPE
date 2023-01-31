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
    <div>
      <Image src={photo} alt={title} width={500} height={400} />
      <span>{title}</span>
      <div className="flex flex-row">
        <Image className="rounded-full" src={authorPhoto} alt={author} width={50} height={50} />
        <span>{author}</span>
      </div>
      <p>{overview}</p>
      <span>{readingTime}</span>
    </div>
  );
}
