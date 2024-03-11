import React, { useState } from 'react';

const GroceryTab = () => {
  const groceryListings = [
    {
      groceryTitle: "Walmart Neighborhood Market",
      groceryLocation: {
        lat: '33.70274',
        lon: '-78.9122',
      },
      groceryDesc: 'Find all you need at this one-stop shop conveniently located close to the condo. Walmart allows you to grab your usual comforts as well as features a gas station for a quick, cheaper fill up.'
    },
    {
      groceryTitle: "Food Lion",
      groceryLocation: {
        lat: '33.724900',
        lon: '-78.868300',
      },
      groceryDesc: 'Food Lion is a popular east coast grocery store for all of your grocery needs.'
    },
    {
      groceryTitle: "Piggly Wiggly",
      groceryLocation: {
        lat: '33.699470',
        lon: '-78.874700',
      },
      groceryDesc: 'Piggly Wiggly is located on Kings Highway, a hop and a skip from the condo. This is a fairly small and very convenient grocery store for your grab and go purchases.'
    },
    {
      groceryTitle: "Costco Wholesale",
      groceryLocation: {
        lat: '33.705320',
        lon: '-78.915900',
      },
      groceryDesc: 'Costco requires a membership to enter and make purchases. Costco Wholesale is conveniently located nearby allowing you to purchase some local deals as well as your usual home Costco comforts.'
    }
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="grocery-list">
        {groceryListings.map((item, index) => {
          const { id, groceryTitle, groceryLocation, groceryDesc } = item;
          const isOpen = openAccordion === index;

          return (
            <div key={id} className="mb-8">
              <div className="row" onClick={() => toggleAccordion(index)} role="button">
                <div className="column">
                  <h3 className="text-xl font-bold">{groceryTitle}</h3>
                  {isOpen && <p>{groceryDesc}</p>}
                </div>
                <div className="column">
                  <iframe
                    title={id}
                    src={`https://maps.google.com/maps?q=${groceryLocation.lat},${groceryLocation.lon}&hl=es;&output=embed`}
                    className={`w-full h-64 ${isOpen ? 'block' : 'hidden'}`}
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