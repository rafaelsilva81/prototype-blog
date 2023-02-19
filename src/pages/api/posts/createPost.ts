import posts from "@/data/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);

  return res.status(201).json({
    message: "Post created successfully",
    post: newPost,
  });
};
