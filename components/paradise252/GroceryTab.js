import React, { useContext } from 'react';

const GroceryTab = () => {

    const groceryListings = []

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 className="text-2xl font-bold mb-4">Grocery Stores</h2>
        <div className="grocery-list">
          {groceryListings.map((item) => {
            const { id, groceryTitle, groceryLocation, groceryDesc } = item;
            return (
              <div key={id} className="mb-8">
                <div className="row">
                  <div className="column">
                    <h3 className="text-xl font-bold">{groceryTitle}</h3>
                    <p>{groceryDesc}</p>
                  </div>
                  <div className="column">
                    <iframe
                      title={id}
                      src={`https://maps.google.com/maps?q=${groceryLocation.lat},${groceryLocation.lon}&hl=es;&output=embed`}
                      className="w-full h-64"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default GroceryTab;