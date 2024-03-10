import React, { useState } from 'react';
import GroceryTab from './GroceryTab';

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
            {/* Entertainment content goes here */}
          </div>
        )}
        {activeTab === 'restaurants' && (
          <div>
            {/* Restaurants content goes here */}
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
