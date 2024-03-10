import React from 'react';
import Navbar from '../components/Navbar';
import CondoCard from '../components/CondoCard';
import { connectToDatabase } from '../util/mongodb';

const Home = ({ condos }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        {condos.map((condo) => (
          <CondoCard key={condo._id} condo={condo} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const condos = await db.collection('condos').find({}).toArray();

  return {
    props: {
      condos: JSON.parse(JSON.stringify(condos)),
    },
  };
}

export default Home;
