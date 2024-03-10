// CondoContent.js
import React, { useState, useEffect } from 'react';
import HomeGuide from './paradise252/HomeGuide';
import ThingsToDo from './paradise252/ThingsToDo';

const CondoContent = ({ condo }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set hasAnimated to true after the component has mounted
    setHasAnimated(true);
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <section
        id="opener"
        className={`min-h-screen flex justify-center transition-opacity ${
          hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'
        }`}
      >
        <div className="container mx-8 pt-16">
          <h2 className="text-2xl font-bold">Paradise 252</h2>
        </div>
      </section>
      <section
        id="section1"
        className={`min-h-screen flex justify-center transition-opacity ${
          hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'
        }`}
      >
        <div className="container mx-8 pt-16">
          <HomeGuide />
        </div>
      </section>
      <section
        id="section2"
        className={`min-h-screen flex justify-center transition-opacity ${
          hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'
        }`}
      >
        <div className="container mx-8 pt-16">
          <ThingsToDo />
        </div>
      </section>
      <section
        id="section3"
        className={`min-h-screen flex justify-center transition-opacity ${
          hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'
        }`}
      >
        <div className="container mx-8 pt-16">
          <h2 className="text-2xl font-bold">About Us</h2>
        </div>
      </section>
      <section
        id="section4"
        className={`min-h-screen flex justify-center transition-opacity ${
          hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'
        }`}
      >
        <div className="container mx-8 pt-16">
          <h2 className="text-2xl font-bold">Guest Book</h2>
        </div>
      </section>
      <section
        id="section5"
        className={`min-h-screen flex justify-center transition-opacity ${
          hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'
        }`}
      >
        <div className="container mx-8 pt-16">
          <h2 className="text-2xl font-bold">Booking</h2>
        </div>
      </section>
    </div>
  );
};

export default CondoContent;
