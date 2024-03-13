import React, { useState } from 'react';
import Navbar from '../components/Navbar';

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

    try {
      const response = await fetch('/api/addCondo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to home page or show a success message
      } else {
        console.error('Failed to add condo');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error adding condo:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold">Add Condo</h1>
        <form onSubmit={handleSubmit}>
          {/* Add form fields for condo details */}
          {/* ... */}
          <button type="submit">Add Condo</button>
        </form>
      </div>
    </div>
  );
};

export default AddCondo;