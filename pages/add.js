import React from 'react';
import Navbar from '../components/Navbar';
import AddCondoForm from '../components/AddCondoForm';

const AddCondoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <AddCondoForm />
      </div>
    </div>
  );
};

export default AddCondoPage;