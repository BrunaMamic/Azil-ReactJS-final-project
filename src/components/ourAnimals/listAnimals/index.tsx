/* eslint-disable @typescript-eslint/no-explicit-any */
import ListAnimalsData from '../listAnimalsData';
import './index.css';

const ListAnimals = (props: any) => {
  const filterByType = (item: any) => {
    const {vrsta} = props.filterForAnimals;
    if (vrsta) {
      return vrsta === item.vrsta;
    } else return true;
  };

  const filterByStatus = (item: any) => {
    const {udomljen} = props.filterForAnimals;

    if ((udomljen).toString().length) {
      return udomljen ? item.udomljen : !item.udomljen;
    } else return true;
  };

  return (
    <div className="mainAnimalsList">
      {props.ourAnimals.filter(
        (animal: any) => filterByType(animal) && filterByStatus(animal),
      ).length ? (
        props.ourAnimals
          .filter(
            (animals: any) => filterByType(animals) && filterByStatus(animals),
          )
          .map((animal: any) => (
            <ListAnimalsData
              key={animal.id}
              id={animal.id}
              ime={animal.ime}
              vrsta={animal.vrsta}
              image={animal.image}
              cip={animal.cip}
              godine={animal.godine}
              opis={animal.opis}
              pregled={animal.pregled}
              udomljen={animal.udomljen}
              SetOurAnimals={props.SetOurAnimals}
            />
          ))
      ) : (
        <div>No animals</div>
      )}
    </div>
  );
};

export default ListAnimals;
