import type { NextApiRequest, NextApiResponse } from "next";

type News = Array<{
  photo: string;
  title: string;
  author: string;
  authorPhoto: string;
  overview: string;
  readingTime: number;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News>
) {
  res.status(200).json([
    {
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      author: "John Doe",
      authorPhoto:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      overview:
        "Well hello, to set different styles with each other you need...",
      readingTime: 5,
    },
    {
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      author: "John Doe",
      authorPhoto:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      overview:
        "Well hello, to set different styles with each other you need...",
      readingTime: 5,
    },
    {
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      author: "John Doe",
      authorPhoto:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      overview:
        "Well hello, to set different styles with each other you need...",
      readingTime: 5,
    },
    {
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      author: "John Doe",
      authorPhoto:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      overview:
        "Well hello, to set different styles with each other you need...",
      readingTime: 5,
    },
    {
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      author: "John Doe",
      authorPhoto:
        "https://images.unsplash.com/photo-1608629601270-a0007becead3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      overview:
        "Well hello, to set different styles with each other you need...",
      readingTime: 5,
    },
  ]);
}
