import { Timestamp } from "mongodb";
import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const body = req.body;
  const method = req.method;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const posts = await db
        .collection("posts")
        .find()
        .sort({ timestamp: -1 })
        .toArray();

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const post = await db
        .collection("posts")
        .insertOne({ ...body, timestamp: new Timestamp() });
      return res.status(201).json(post);
    } catch (error) {
      console.log("🚀 ~ error", error);
      return res.status(500).json(error);
    }
  }
}
