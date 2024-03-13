import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const formData = req.body;

      // Add validation and any other necessary logic here
      if (!formData.name || !formData.building_num) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }

      // Insert the new condo data into the MongoDB collection
      const result = await db.collection('condos').insertOne(formData);

      res.status(200).json({ message: 'Condo added successfully', condoId: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}