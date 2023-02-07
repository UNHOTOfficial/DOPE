import type { NextApiRequest, NextApiResponse } from "next";

type Products = {
  data: Array<{
    email: string;
    password: string;
  }>;
  message: string;
};

type data = Array<{ email: string; password: string }>;
let data = [{ email: "", password: "" }];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        data: data,
        message: "GET",
      });
      break;
    case "POST":
      data?.push(req.body);
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
