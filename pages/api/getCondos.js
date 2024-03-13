import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const { db } = await connectToDatabase();
        const condos = await db.collection('condos').find({}).toArray();
  
        res.status(200).json(condos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }