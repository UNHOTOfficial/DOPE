import type { NextApiRequest, NextApiResponse } from "next";

type Products = Array<{
  id: number;
  photo: string;
  title: string;
  price: number;
  rate: number;
  count: number;
  isFresh: boolean;
  isBestSelling: boolean;
  colors: Array<string>;
  overview: string;
  size: number;
  quantity: number;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>,
  context: any
) {
  res.status(200).json([
    {
      id: 1,
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
      size: 43,
      quantity: 1,
      overview:
        "The secret to spotting the perfect Chelsea boots is to look for those that are timeless, crafted from a hardy, long-lasting material and have a unique detail. Ticking all the right boxes, Proenza Schouler's pair has been made in Italy from black leather and detailed with contrasting white stitching. They're equipped with elasticated panels at the sides for comfort, plus handy pull tabs at the back.",
    },
    {
      id: 2,
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
      size: 43,
      quantity: 1,
      overview:
        "The secret to spotting the perfect Chelsea boots is to look for those that are timeless, crafted from a hardy, long-lasting material and have a unique detail. Ticking all the right boxes, Proenza Schouler's pair has been made in Italy from black leather and detailed with contrasting white stitching. They're equipped with elasticated panels at the sides for comfort, plus handy pull tabs at the back.",
    },
    {
      id: 3,
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
      size: 43,
      quantity: 1,
      overview:
        "The secret to spotting the perfect Chelsea boots is to look for those that are timeless, crafted from a hardy, long-lasting material and have a unique detail. Ticking all the right boxes, Proenza Schouler's pair has been made in Italy from black leather and detailed with contrasting white stitching. They're equipped with elasticated panels at the sides for comfort, plus handy pull tabs at the back.",
    },
    {
      id: 4,
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
      size: 43,
      quantity: 1,
      overview:
        "The secret to spotting the perfect Chelsea boots is to look for those that are timeless, crafted from a hardy, long-lasting material and have a unique detail. Ticking all the right boxes, Proenza Schouler's pair has been made in Italy from black leather and detailed with contrasting white stitching. They're equipped with elasticated panels at the sides for comfort, plus handy pull tabs at the back.",
    },
  ]);
}
