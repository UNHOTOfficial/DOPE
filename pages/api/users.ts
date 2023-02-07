import type { NextApiRequest, NextApiResponse } from "next";

type Products = {
  data: Array<{
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
  }>;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        data: [],
        message: "GET",
      });
      break;
    case "POST":
      res.status(200).json({ data: req.body, message: "POST" });
      break;
    case "PATCH":
      res.status(200).json({ data: req.body, message: "PATCH" });
      break;
    case "DELETE":
      res.status(200).json({ data: req.body, message: "DELETE" });
      break;
  }
}
