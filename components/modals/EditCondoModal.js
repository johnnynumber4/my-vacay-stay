import React, { useState } from 'react';

const EditCondoModal = ({ condo, onUpdateCondo, onClose }) => {
  const [editedCondoData, setEditedCondoData] = useState({
    name: condo.name,
    building_num: condo.building_num,
    active: condo.active,
  });

  const handleEditChange = (e) => {
    setEditedCondoData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    onUpdateCondo(editedCondoData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 w-full max-w-md rounded">
        <h2 className="text-2xl font-bold mb-4">Edit Condo</h2>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={editedCondoData.name}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
          />
        </label>
        <label className="block mb-2">
          Building Number:
          <input
            type="text"
            name="building_num"
            value={editedCondoData.building_num}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
          />
        </label>
        <label className="block mb-2">
          Unit Number:
          <input
            type="text"
            name="unit_num"
            value={editedCondoData.unit_num}
            onChange={handleEditChange}
            className="w-full border p-2 rounded"
          />
        </label>
        <label className="block mb-4">
          Active:
          <input
            type="checkbox"
            name="active"
            checked={editedCondoData.active}
            onChange={handleEditChange}
          />
        </label>
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mr-2"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCondoModal;