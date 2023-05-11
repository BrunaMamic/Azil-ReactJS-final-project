/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './index.css';

const AddAnimals = (props: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function handler(event: any) {
    const {name, value, checked} = event.target;

    if (value !== 0) {
      if (name === 'cip') {
        props.setOurAnimals({...props.animal, cip: checked});
      } else {
        props.setOurAnimals({...props.animal, [name]: value});
      }
    }
  }

  async function createAnimal() {
    const result = proccesData(props.animal);
    const data = await axios.post('http://localhost:3001/zivotinje', result);

    props.setOurAnimals({
      id: '',
      vrsta: '',
      ime: '',
      godine: '',
      image: '',
      opis: '',
      pregled: '',
      cip: false,
      udomljen: '',
    });
    reset();
  }

  const proccesData = (data: any) => {
    return {
      id: data.id,
      vrsta: data.vrsta,
      ime: data.ime,
      godine: data.godine,
      image: data.image,
      opis: data.opis,
      pregled: data.pregled,
      cip: data.cip,
      udomljen: data.udomljen,
    };
  };

  return (
    <div className='adding'>
      {/* <img className="picForAddForm" src="https://img.freepik.com/free-vector/pet-store-animal-shelter-man-taking-puppy-from-cage-buying-adopting-dog-volunteers-helping-choose-homeless-animal-adoption_74855-8527.jpg?w=2000&t=st=1683724357~exp=1683724957~hmac=7facaf3eefaa2c29ab1dba7b4362d249be9461e06abdc5f00cef4d98f1d9a61a"></img> */}
      <img src="/data/8527.jpg" className="picForAddForm"/>
      <div className="addForm">
        <form onSubmit={handleSubmit(createAnimal)} className="inputForm">
          <div className='inputAddForm'>
            <label htmlFor="vrsta">Choose type: </label>
            <select {...register('vrsta', {required: true})} onChange={handler} className="selectAdd">
              <option value={0}>Choose</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="else">else</option>
            </select>
            {errors.vrsta && <div className="error">type is required</div>}
          </div>
          <div className='inputAddForm'>
            <label htmlFor="ime">Name:</label>
            <input
              type="text"
              placeholder="ex. Papi"
              {...register('ime', {
                required: true,
                max: 10,
                minLength: 1,
                pattern: /^[a-zA-Z ]+$/                ,
              })}
              onChange={handler}
            />
            {errors.ime && (
              <div className="error">Enter name for your animal</div>
            )}
          </div>
          <div className='inputAddForm'>
            Age:
            <input
              min={0}
              type="number"
              step={0.1}
              placeholder="ex. 3 or 0.5 (five months old)"
              {...register('godine', {pattern: /^[0-9\b]/g, min: 0})}
              onChange={handler}
            />
          </div>
          <div className='inputAddForm'>
            Image:
            <input
              type="url"
              placeholder="URL link to your image"
              {...register('image', {})}
              onChange={handler}
            />
          </div>
          <div className='inputAddForm'>
            About:
            <textarea {...register('opis', {max: 100})} onChange={handler} className="aboutText"/>
          </div>

          <div className='inputAddForm'>
            Last vet visit:
            <input
              type="date"
              placeholder="pregled"
              {...register('pregled', {})}
              onChange={handler}
            />
          </div>

          <div className='inputAddForm'>
            Chiped?
            <input
              type="checkbox"
              placeholder="cip"
              {...register('cip', {})}
              onChange={handler}
            />
          </div>

          <input type="submit" value="Add animal" />
        </form>
      </div>


    </div>
  );
};
export default AddAnimals;
