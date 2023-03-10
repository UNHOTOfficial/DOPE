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
    sizes: Array<string>;
  }>;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>,
  context: any
) {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        data: [
          {
            id: 1,
            photo: "/assets/chelsea-boots.jpg",
            title: "Chelsea Boots",
            price: 399,
            rate: 4.7,
            count: 3786,
            isFresh: true,
            isBestSelling: false,
            colors: ["#D27C3F"],
            sizes: ["41", "42", "43"],
            overview:
              "The secret to spotting the perfect Chelsea boots is to look for those that are timeless, crafted from a hardy, long-lasting material and have a unique detail. Ticking all the right boxes, Proenza Schouler's pair has been made in Italy from black leather and detailed with contrasting white stitching. They're equipped with elasticated panels at the sides for comfort, plus handy pull tabs at the back.",
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
