import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const EditCondo = ({ initialCondo }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialCondo);

  useEffect(() => {
    // Fetch initial condo data when the component mounts
    const fetchCondoData = async () => {
      try {
        const response = await fetch(`/api/editCondo?id=${router.query.id}`);
        const condoData = await response.json();
        setFormData(condoData);
      } catch (error) {
        console.error('Error fetching condo data:', error);
        // Handle error (e.g., show an error message)
      }
    };

    fetchCondoData();
  }, [router.query.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/editCondo?id=${router.query.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to home page or show a success message
        router.push('/');
      } else {
        console.error('Failed to update condo');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error updating condo:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold">Edit Condo</h1>
        <form onSubmit={handleSubmit}>
          {/* Add form fields for condo details */}
          {/* ... */}
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

EditCondo.getInitialProps = async ({ query }) => {
  const response = await fetch(`/api/editCondo?id=${query.id}`);
  const initialCondo = await response.json();

  return { initialCondo };
};

export default EditCondo;