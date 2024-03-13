import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { db } = await connectToDatabase();
      
      // Assuming your collection is named 'condos'
      const collection = db.collection('condos');
      
      // Parse the ID string into an ObjectId
      const objectId = new ObjectId(id);

      // Get the updated condo data from the request body
      const updatedCondoData = req.body;

      // Update the condo in the database
      const result = await collection.updateOne({ _id: objectId }, { $set: updatedCondoData });

      if (result.modifiedCount === 1) {
        // Condo successfully updated
        res.status(200).json({ message: 'Condo updated successfully' });
      } else {
        // Condo not found or no changes made
        res.status(404).json({ message: 'Condo not found or no changes made' });
      }
    } catch (error) {
      console.error('Error updating condo:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}