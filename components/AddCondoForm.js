// components/AddCondoForm.js
import React, { useState } from 'react';
import CondoModel from '../models/Condo'; // Adjust the path as needed

const AddCondoForm = ({ onAddCondo }) => {
  const [newCondoData, setNewCondoData] = useState(CondoModel);

  const handleNewCondoChange = (e) => {
    setNewCondoData({ ...newCondoData, [e.target.name]: e.target.value });
  };

  const handleAddCondo = () => {
    // Validate required fields before adding a new condo
    if (!newCondoData.name || !newCondoData.street_address1) {
      console.error('Please fill in all required fields');
      // Handle error (e.g., show an error message)
      return;
    }

    // Add the new condo using the provided function
    onAddCondo(newCondoData);

    // Reset the form data after adding the condo
    setNewCondoData(CondoModel);
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-white border rounded shadow-lg p-4">
      <h2 className="text-xl font-bold mb-2">Add New Condo</h2>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={newCondoData.name}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Building Number:
        <input
          type="text"
          name="building_num"
          value={newCondoData.building_num}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Street Address 1:
        <input
          type="text"
          name="street_address1"
          value={newCondoData.street_address1}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Street Address 2:
        <input
          type="text"
          name="street_address2"
          value={newCondoData.street_address2}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        City:
        <input
          type="text"
          name="city"
          value={newCondoData.city}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        State:
        <input
          type="text"
          name="state"
          value={newCondoData.state}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Zip Code:
        <input
          type="text"
          name="zip_code"
          value={newCondoData.zip_code}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Owner Email:
        <input
          type="email"
          name="owner_email"
          value={newCondoData.owner_email}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Manager Email:
        <input
          type="email"
          name="manager_email"
          value={newCondoData.manager_email}
          onChange={handleNewCondoChange}
          className="w-full border p-2 rounded"
        />
      </label>
      <button
        type="button"
        onClick={handleAddCondo}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Add Condo
      </button>
    </div>
  );
};

export default AddCondoForm;
