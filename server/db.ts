import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

export type PodcastEntry = {
  _id: string;
  spotify_id: string;
  references: Reference[];
};
export type Reference = {
  name: string;
  timecode: string;
};

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "refcast");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectioName) {
  return await db.collection(collectioName);
}

export async function getRefs(collectioName) {
  return await db.collection(collectioName).find().toArray();
}

export async function createRefs(newRef) {
  const orderCollection = await getCollection("reference_example");
  return await orderCollection.insertOne(newRef);
}

export function closeDB() {
  client.close();
}

export async function createPodcastEntry(spotifyId) {
  const podcastCollection = await getCollection("reference_example");
  return await podcastCollection.insertOne({
    spotify_id: spotifyId,
    references: [],
  });
}

export async function getPodcastEntry(spotifyId) {
  const podcastCollection = await getCollection("reference_example");
  const podcastEntry = await podcastCollection.findOne({
    spotify_id: spotifyId,
  });
  if (!podcastEntry) {
    return null;
  }
  return podcastEntry;
}

export async function updateReference(id, fieldsToUpdate: Partial<Reference>) {
  const employeeCollection = await getCollection("reference_example");
  const updateResult = await employeeCollection.updateOne(
    { spotify_id: id },
    { $push: { references: fieldsToUpdate } }
  );
  return updateResult.modifiedCount >= 1;
}
