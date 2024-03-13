import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    // Handle GET request (fetch condo data for editing)
    try {
      const { db } = await connectToDatabase();
      const condo = await db.collection('condos').findOne({ _id: req.query.id });

      res.status(200).json(condo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (method === 'PUT') {
    // Handle PUT request (update condo data)
    try {
      const { db } = await connectToDatabase();
      const formData = req.body;

      await db.collection('condos').updateOne({ _id: req.query.id }, { $set: formData });

      res.status(200).json({ message: 'Condo updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}