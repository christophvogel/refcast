import { NextApiRequest, NextApiResponse } from "next";
import {
  createPodcastEntry,
  getPodcastEntry,
  updateReference,
  withDatabase,
} from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    if (req.method === "GET") {
      const result = await getPodcastEntry(id);
      if (!result) {
        const newPodcastEntry = await createPodcastEntry(id);
        res.status(200).json(newPodcastEntry.ops[0]);
      } else {
        res.status(200).json(result);
      }
    } else if (req.method === "PATCH") {
      const updated = await updateReference(id, req.body);
      if (!updated) {
        return res.status(404).end();
      }
      return res.status(200).json({ status: 200, message: `${id} updated` });
    }
  }
);
