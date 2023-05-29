/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect} from 'react';
import axios from 'axios';

import ListAnimals from '../components/ourAnimals/listAnimals';
import FilterAnimals from '../components/ourAnimals/filterAnimals';
import '../styles/index.css';

export default function OurAnimals() {
  const [ourAnimalsList, SetOurAnimalsList] = useState([]);
  const [filterForAnimals, setFilterForAnimals] = useState({
    vrsta: '',
    udomljen: '',
  });

  const handleFilter = (vrsta: any, udomljen: any) => {
    setFilterForAnimals({vrsta: vrsta, udomljen: udomljen});
  };

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/BrunaMamic/azil-server/zivotinje/').then(res => {
      SetOurAnimalsList(res.data);
    });
  }, []);

  return (
    <div className="editMain">
      <FilterAnimals filter={handleFilter} />
      <ListAnimals
        filterForAnimals={filterForAnimals}
        ourAnimals={ourAnimalsList}
        SetOurAnimals={SetOurAnimalsList}
      />
    </div>
  );
}
