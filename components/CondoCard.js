import React from 'react';
import Link from 'next/link';

const CondoCard = ({ condo }) => {
  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-white border rounded shadow-lg">
      <Link legacyBehavior href={`/condos/${condo._id}`}>
        <a className="block h-full hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{condo.name}</h2>
            <p className="text-gray-400">ID: {condo._id}</p>
            <p className="text-gray-400">Building: {condo.building_num}</p>
            <p className="text-gray-400">Unit: {condo.unit_num}</p>
            <p className={`text-${condo.active ? 'green' : 'red'}-400 font-semibold`}>
              Status: {condo.active ? 'Active' : 'Inactive'}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CondoCard;