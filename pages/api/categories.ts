import type { NextApiRequest, NextApiResponse } from "next";

type Products = {
  data: Array<{
    image: string;
    title: string;
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
        data: [
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
        ],
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
