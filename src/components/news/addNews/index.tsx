/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import './index.css'

const AddNews = (props: any) => {
  const [modal, setModal] = useState(false);

  const [addNews, setAddNews] = useState({
    id: '',
    naslov: '',
    datum: '',
    tekst: '',
    vazno: '',
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  function handler(event: any) {
    const {name, value} = event.target;
    if (value !== 0) {
      setAddNews({...addNews, [name]: value});
    }
  }

  async function createNews() {
    const result = processData(addNews);
    const data = await axios.post('http://localhost:3001/obavijesti', result);

    props.setListNews((prev: any) => {
      return [ data.data,...prev];
    });

    reset();
  }

  const processData = (data: any) => {
    return {
      id: data.id,
      naslov: data.naslov,
      datum: new Date().toISOString(),
      tekst: data.tekst,
      vazno: data.vazno,
    };
  };

  return (
    <>
      <div style={{padding: "20px"}}>
        <button onClick={toggleModal} className="addNewsButton">
          <i className="bi bi-file-earmark-plus"></i>
        </button>
      </div>
      {modal && (
        <form onSubmit={handleSubmit(createNews)} className="newsForm">
          <input
            type="text"
            placeholder="title"
            style={{width:"300px", height:"50px"}}
            {...register('naslov', {required: true, max: 20})}
            onChange={handler}
          />
          <textarea
          placeholder="write ..."
          className='newsTextarea'
          style={{width:"300px", height:"100px"}}
            {...register('tekst', {min: 10, maxLength: 200})}
            onChange={handler}
          />

          <input type="submit" value="ADD"/>
        </form>
      )}
    </>
  );
};

export default AddNews;
