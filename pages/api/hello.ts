// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ message: "GET" });
      break;
    case "POST":
      res.status(200).json({ message: "POST" });
      break;
    case "PATCH":
      res.status(200).json({ message: "PATCH" });
      break;
    case "DELETE":
      res.status(200).json({ message: "DELETE" });
      break;
  }
}
