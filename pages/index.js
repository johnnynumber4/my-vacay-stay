import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CondoCard from '../components/CondoCard';
import AddCondoForm from '../components/AddCondoForm';
import { connectToDatabase } from '../util/mongodb';
import EditCondoModal from '../components/modals/EditCondoModal';

const Home = ({ initialCondos }) => {
  const [condos, setCondos] = useState(initialCondos);
  const [editingCondo, setEditingCondo] = useState(null);
  const [isAddCondoFormOpen, setIsAddCondoFormOpen] = useState(false);

  const handleEditCondo = (condo) => {
    setEditingCondo(condo);
  };

  const handleAddCondo = async (newCondoData) => {
    try {
      // Check if required fields are not empty
      if (!newCondoData.name || !newCondoData.building_num) {
        console.error('Please fill in all required fields');
        return;
      }

      const response = await fetch('/api/addCondo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCondoData),
      });

      if (response.ok) {
        setCondos((prevCondos) => [...prevCondos, newCondoData]);
        console.log('Condo added successfully');
        setIsAddCondoFormOpen(false); // Close the accordion after adding a condo
      } else {
        console.error('Failed to add condo');
      }
    } catch (error) {
      console.error('Error adding condo:', error);
    }
  };

  const handleUpdateCondo = async (updatedCondoData) => {
    try {
      const response = await fetch(`/api/editCondo/${editingCondo._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCondoData),
      });

      if (response.ok) {
        setCondos((prevCondos) =>
          prevCondos.map((condo) =>
            condo._id === editingCondo._id ? { ...condo, ...updatedCondoData } : condo
          )
        );
        setEditingCondo(null);
        console.log('Condo updated successfully');
      } else {
        console.error('Failed to update condo');
      }
    } catch (error) {
      console.error('Error updating condo:', error);
    }
  };

  const fetchCondos = async () => {
    try {
      const response = await fetch('/api/getCondos');

      if (response.ok) {
        const updatedCondos = await response.json();
        setCondos(updatedCondos);
      } else {
        console.error('Failed to fetch condos');
      }
    } catch (error) {
      console.error('Error fetching condos:', error);
    }
  };

  useEffect(() => {
    fetchCondos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 flex flex-wrap justify-center">
        {/* Form to add a new condo */}
        <div className="w-full mb-4">
          <button
            className="w-full p-2 bg-gray-800 text-white text-left"
            onClick={() => setIsAddCondoFormOpen((prev) => !prev)}
          >
            Add New Condo
            {isAddCondoFormOpen ? ' ▲' : ' ▼'}
          </button>
          {isAddCondoFormOpen && <AddCondoForm onAddCondo={handleAddCondo} />}
        </div>

        {/* Display existing condos */}
        {condos &&
          condos.map((condo) => (
            <CondoCard key={condo._id} condo={condo} onEditCondo={handleEditCondo} />
          ))}

        {/* Modal or another component for editing condos */}
        {editingCondo && (
          // Example: You can create an EditCondoModal component or page
          <EditCondoModal
            condo={editingCondo}
            onUpdateCondo={handleUpdateCondo}
            onClose={() => setEditingCondo(null)}
          />
        )}
      </div>
    </div>
  );
};

// Your existing getServerSideProps function
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const condos = await db.collection('condos').find({}).toArray();

  return {
    props: {
      initialCondos: JSON.parse(JSON.stringify(condos)),
    },
  };
}

export default Home;