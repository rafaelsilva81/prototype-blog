import posts from "@/data/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    posts,
  });
};
