import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  const method = req.method;
  const { id } = req.query;

  const { db } = await connectToDatabase();

  if (method === "DELETE") {
    try {
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });

      return res.status(204).json({ msg: "Post deleted successfully" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
