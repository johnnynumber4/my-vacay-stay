import React from 'react';
import Navbar from '../components/Navbar';
import { connectToDatabase } from '../util/mongodb';
import CondoCard from '../components/CondoCard';
import { ObjectId } from 'mongodb';

const CondoDetail = ({ condo }) => {
  if (!condo) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto mt-8">
          <p>Condo not found</p>
        </div>
      </div>
    );
  }

  console.log(condo);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        {/* Render CondoCard component with condo data */}
        <CondoCard condo={condo} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { db } = await connectToDatabase();
  const condo = await db.collection('condos');
  const findCondo = await condo.findOne({ _id: new ObjectId(params.id) });

  return {
    props: {
      condo: findCondo ? JSON.parse(JSON.stringify(findCondo)) : null,
    },
  };
}

export default CondoDetail;
