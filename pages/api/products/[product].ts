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
}>;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Products>,
    context:any
) {
    
    console.log(context);
    
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
    },
  ]);
}
