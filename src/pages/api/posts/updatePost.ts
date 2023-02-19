import posts from "@/data/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { title, content } = req.body;

  const postIndex = posts.findIndex((post) => post.id === Number(id));

  if (postIndex === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const updatedPost = {
    id: Number(id),
    title,
    content,
  };

  posts[postIndex] = updatedPost;

  return res.status(200).json({
    message: "Post updated successfully",
    post: updatedPost,
  });
};
