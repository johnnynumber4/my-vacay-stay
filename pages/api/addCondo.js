// pages/api/addCondo.js
import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const formData = req.body; // Assuming you send JSON data in the request body

      await db.collection('condos').insertOne(formData);

      res.status(200).json({ message: 'Condo added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}