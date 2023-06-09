/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Donated from '../components/donations/donated';
import GivenDonations from '../components/donations/givenDonation';
import LookingForDonation from '../components/donations/lookingFor';
import NewDonation from '../components/donations/newDonation';

export default function Donations() {
  const [donations, setDonations] = useState([]);

  const getAllDonations = async () => {
    const data = await axios.get('https://my-json-server.typicode.com/BrunaMamic/azil-server/donacije/');
    setDonations(data.data);
  };

  useEffect(() => {
    getAllDonations();
  }, []);

  const changeStatusToDonated = async (item: any) => {
    await axios.patch(`https://my-json-server.typicode.com/BrunaMamic/azil-server/donacije/${item.id}`, {
      ...item,
      kategorija: 'donirano',
    });
    setDonations((prev: any) => {
      return prev.map((x: any) => {
        if (x.id === item.id) {
          return {...x, kategorija: 'donirano'};
        } else return x;
      });
    });
  };

  return (
    <div style={{flex: 1}}>
      <NewDonation setDonations={setDonations} />
      <LookingForDonation
        setDonations={setDonations}
        donations={donations}
        changeStatusToDonated={changeStatusToDonated}
      />
      <GivenDonations
        changeStatusToDonated={changeStatusToDonated}
        setDonations={setDonations}
        donations={donations}
      />
      <Donated setDonations={setDonations} donations={donations} />
    </div>
  );
}


