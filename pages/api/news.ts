import type { NextApiRequest, NextApiResponse } from "next";

type News = {
  data: Array<{
    id: number;
    photo: string;
    title: string;
    author: string;
    authorPhoto: string;
    overview: string;
    readingTime: number;
  }>;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        data: [
          {
            id: 1,
            photo: "/assets/chelsea-boots.jpg",
            title: "how to set styles",
            author: "John Doe",
            authorPhoto: "/assets/chelsea-boots.jpg",
            overview:
              "Well hello, to set different styles with each other you need...",
            readingTime: 5,
          },
          {
            id: 2,
            photo: "/assets/chelsea-boots.jpg",
            title: "Men Accessories",
            author: "Jason Hudson",
            authorPhoto: "/assets/chelsea-boots.jpg",
            overview:
              "Well hello, to set different styles with each other you need...",
            readingTime: 5,
          },
          {
            id: 3,
            photo: "/assets/chelsea-boots.jpg",
            title: "Dark Clothes",
            author: "Christian Gonzalez",
            authorPhoto: "/assets/chelsea-boots.jpg",
            overview:
              "Well hello, to set different styles with each other you need...",
            readingTime: 5,
          },
          {
            id: 4,
            photo: "/assets/chelsea-boots.jpg",
            title: "Women Accessories",
            author: "Anny Johnson",
            authorPhoto: "/assets/chelsea-boots.jpg",
            overview:
              "Well hello, to set different styles with each other you need...",
            readingTime: 5,
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
