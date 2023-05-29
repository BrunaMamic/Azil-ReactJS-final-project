import {useState} from 'react';
import AddAnimals from '../components/addAnimals/addForm';

export default function Add() {
  const [animal, setAnimal] = useState({
    id: '',
    vrsta: '',
    ime: '',
    godine: '',
    image: '',
    opis: '',
    pregled: '',
    cip: false,
    udomljen: false,
  });

  return (
    <div style={{display:"flex"}}>
      <AddAnimals setOurAnimals={setAnimal} animal={animal} />
    </div>
  );
}
