import React from 'react';
import CondoNavbar from '../../../components/CondoNavbar';
import CondoContent from '../../../components/CondoContent';
import { connectToDatabase } from '../../../util/mongodb';
import { ObjectId } from 'mongodb';

const CondoPage = ({ condo }) => {
  return (
    <div>
      <CondoNavbar condoName={condo.name} />
      <CondoContent condo={condo} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { db } = await connectToDatabase();
  const condo = await db.collection('condos').findOne({ _id: new ObjectId(params.id) });

  return {
    props: {
      condo: condo ? JSON.parse(JSON.stringify(condo)) : null,
    },
  };
}

export default CondoPage;
