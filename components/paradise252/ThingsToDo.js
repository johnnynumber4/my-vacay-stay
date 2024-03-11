import React, { useState } from 'react';
import GroceryTab from './GroceryTab';
import Entertainment from './EntertainmentTab';
import RestaurantsTab from './RestaurantTab';

const ThingsToDo = () => {
  const [activeTab, setActiveTab] = useState('grocery'); // Default tab

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <Tab title="Grocery" activeTab={activeTab} onClick={() => setActiveTab('grocery')} />
          <Tab title="Entertainment" activeTab={activeTab} onClick={() => setActiveTab('entertainment')} />
          <Tab title="Restaurants" activeTab={activeTab} onClick={() => setActiveTab('restaurants')} />
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'grocery' && (
          <div>
            <GroceryTab />
          </div>
        )}
        {activeTab === 'entertainment' && (
          <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="p-4">
                <p>
                  Check out some of our favorite things to do in Myrtle Beach. The Boardwalk is very close. You can enter at 14th Avenue N (2 blocks south). It is a beautiful sunrise walk or run and less than 3 miles total - if you want to do the whole thing.
                </p>
                <p>
                  Have your family look for you on the boardwalk:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <a href="https://www.earthcam.com/usa/southcarolina/myrtlebeach/?cam=myrtlebeach_hd2" target="_blank" rel="noopener noreferrer">
                      Myrtle Beach Cam North
                    </a>
                  </li>
                  <li>
                    <a href="https://www.earthcam.com/usa/southcarolina/myrtlebeach/?cam=myrtlebeach_hd" target="_blank" rel="noopener noreferrer">
                      Myrtle Beach Cam Volleyball
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Entertainment />
          </div>
        )}
        {activeTab === 'restaurants' && (
          <div>
            <RestaurantsTab />
          </div>
        )}
      </div>
    </div>
  );
};

const Tab = ({ title, activeTab, onClick }) => (
  <div
    className={`cursor-pointer ${activeTab === title.toLowerCase() ? 'border-b-2 border-blue-500' : ''}`}
    onClick={onClick}
  >
    {title}
  </div>
);

export default ThingsToDo;
