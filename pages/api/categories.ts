import type { NextApiRequest, NextApiResponse } from "next";

type Products = Array<{
  image: string;
  title: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  res.status(200).json([
    {
      image: "/assets/Loafers.jpg",
      title: "Men Formal Shoes",
    },
    {
      image: "/assets/high-heels.jpg",
      title: "High Heels",
    },
    {
      image: "/assets/sneakers.jpg",
      title: "Sneakers",
    },
    {
      image: "/assets/accessories.jpg",
      title: "accessories",
    },
  ]);
}
