import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI || !MONGODB_DB) {
  throw new Error('Please define the MONGODB_URI and MONGODB_DB environment variables inside .env.local');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Check if the code is running on the server-side
  if (typeof window === 'undefined') {
    const client = await MongoClient.connect(MONGODB_URI, {
      // useNewUrlParser: true, useUnifiedTopology: true
    });

    const db = await client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  }

  // If the code is running on the client-side, return an error or handle accordingly
  throw new Error('This code should only be executed on the server-side');
}