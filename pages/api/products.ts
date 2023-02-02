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
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
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
    },
    {
      id: 2,
      photo:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
    },
    {
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
    },
    {
      id: 4,
      photo:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: true,
      colors: ["#D27C3F"],
    },
    {
      id: 5,
      photo:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: true,
      colors: ["#D27C3F"],
    },
  ]);
}
