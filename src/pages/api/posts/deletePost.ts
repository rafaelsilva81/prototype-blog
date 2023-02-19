import posts from "@/data/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const postIndex = posts.findIndex((post) => post.id === Number(id));

  if (postIndex === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  posts.splice(postIndex, 1);

  return res.status(200).json({
    message: "Post deleted successfully",
    posts: posts,
  });
};
