import React from 'react';

const CondoCard = ({ condo, onEditCondo }) => {
  const handleEdit = () => {
    onEditCondo(condo);
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-white border rounded shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{condo.name}</h2>
        <p className="text-gray-400">ID: {condo._id}</p>
        <p className="text-gray-400">Building: {condo.building_num}</p>
        <p className="text-gray-400">Unit: {condo.unit_num}</p>
        <p className={`text-${condo.active ? 'green' : 'red'}-400 font-semibold`}>
          Status: {condo.active ? 'Active' : 'Inactive'}
        </p>
        <a
          href={`/condos/${condo._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mr-2"
        >
          View
        </a>
        <button
          type="button"
          onClick={handleEdit}
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default CondoCard;