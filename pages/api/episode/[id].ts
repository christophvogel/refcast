import { NextApiRequest, NextApiResponse } from "next";
import {
  createPodcastEntry,
  getPodcastEntry,
  withDatabase,
} from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const result = await getPodcastEntry(id);
    if (!result) {
      const newPodcastEntry = await createPodcastEntry(id);
      console.log("new");
      res.status(200).json(newPodcastEntry.ops[0]);
    } else {
      res.status(200).json(result);
    }
  }
);
