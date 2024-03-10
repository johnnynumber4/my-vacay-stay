import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { connectToDatabase } from '../util/mongodb';

const AddCondo = () => {
  const [formData, setFormData] = useState({
    Name: '',
    BuildingNumber: '',
    UnitNumber: '',
    Active: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { db } = await connectToDatabase();

    await db.collection('condos').insertOne(formData);

    // Redirect to home page or show a success message
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold">Add Condo</h1>
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

          <button type="submit">Add Condo</button>
        </form>
      </div>
    </div>
  );
};

export default AddCondo;
