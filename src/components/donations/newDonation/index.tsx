import axios from 'axios';
import {useContext, useState} from 'react';
import {ToggleButton} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {RoleContext} from '../../../context';
import './index.css';

const NewDonation = (props: any) => {
  const role = useContext(RoleContext);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const [newDonation, setNewDonation] = useState({
    id: '',
    kategorija: '',
    tip: '',
    vrijednost: '',
    opis: '',
  });

  function handler(event: any) {
    const {name, value} = event.target;
    if (value !== 0) {
      setNewDonation({...newDonation, [name]: value});
    }
  }

  async function createDonation() {
    const result = processData(newDonation);

    const data = await axios.post('http://localhost:3001/donacije', result);
    props.setDonations((prev: any) => {
      return [...prev, data.data];
    });
    setNewDonation({
      id: '',
      kategorija: '',
      tip: '',
      vrijednost: '',
      opis: '',
    });
    reset();
  }

  const processData = (data: any) => {
    return {
      id: data.id,
      kategorija: role.isAdmin ? 'trazi' : 'nudi',
      tip: data.tip,
      vrijednost: data.vrijednost,
      opis: data.opis,
    };
  };
  return (
    <div
      className="newDonationHeader"
      style={{
        background: `url(https://images.unsplash.com/photo-1563441421420-dd76ae16ac43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) no-repeat`,
      }}>
      <div className={'buttonContainer'}>
        <button className="donationNavBtn" onClick={toggleModal}>
          <div>
            <i className="bi bi-plus"></i>
          </div>
        </button>
      </div>

      {modal && (
        <div className="donationForm">
          <form onSubmit={handleSubmit(createDonation)} className="donate">
            {role.isAdmin ? (
              <div style={{fontSize: '1.1em', fontWeight: 'bold'}}>
                What are you looking for?
              </div>
            ) : (
              <div style={{fontSize: '1.1em', fontWeight: 'bold'}}>
                What are you donating?
              </div>
            )}
            <select {...register('tip', {required: true})} onChange={handler}>
              <option value={0}>Choose</option>
              <option value="Food">Food</option>
              <option value="Toys">Toys</option>
              <option value="Blankets">Blankets</option>
              <option value="Other">Other</option>
            </select>
            Enter value:
            <input
              type="number"
              placeholder="value in euro ex. 10"
              {...register('vrijednost', {required: true})}
              onChange={handler}
            />
            Describe it:
            <textarea
              placeholder="describe it ..."
              {...register('opis', {maxLength: 200})}
              onChange={handler}
            />
            <button className="donateButton">
              <i className="bi bi-check-circle"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default NewDonation;
