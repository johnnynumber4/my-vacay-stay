import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { connectToDatabase } from '../../util/mongodb';

const EditCondo = ({ initialCondo }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialCondo);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { db } = await connectToDatabase();

    await db.collection('condos').updateOne({ _id: initialCondo._id }, { $set: formData });

    // Redirect to home page or show a success message
    router.push('/');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold">Edit Condo</h1>
        <form onSubmit={handleSubmit}>
          {/* Add form fields for condo details */}
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} />

          <label>Building Number:</label>
          <input type="text" name="BuildingNumber" value={formData.BuildingNumber} onChange={handleChange} />

          <label>Unit Number:</label>
          <input type="text" name="UnitNumber" value={formData.UnitNumber} onChange={handleChange} />

          <label>Active:</label>
          <input type="checkbox" name="Active" checked={formData.Active} onChange={handleChange} />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { db } = await connectToDatabase();
  const condo = await db.collection('condos').findOne({ _id: params.id });

  return {
    props: {
      initialCondo: JSON.parse(JSON.stringify(condo)),
    },
  };
}

export default EditCondo;
