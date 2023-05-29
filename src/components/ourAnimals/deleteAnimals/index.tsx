import axios from 'axios';
import {useState, useEffect} from 'react';
import './index.css'

const DeleteAnimal = (props: any) => {
  const [dataID, setDataID] = useState(props.id);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setDataID(props.id);
  }, [props.id]);

  async function deleteData() {
    await axios.delete(`https://my-json-server.typicode.com/BrunaMamic/azil-server/zivotinje/${dataID}`);
    const data = await axios.get('https://my-json-server.typicode.com/BrunaMamic/azil-server/zivotinje');
    props.delete(data.data);
    setModal(false);
  }
  return (
    <>
      <button className="confirmButtonMain" onClick={toggleModal}>
        <i className="bi bi-trash"></i>
      </button>
      {modal && (

        <div className="modal">
          
          <div className="container">
            <h2 className="modalTitle">Are you sure?</h2>
            <div className="modalButtons">
              <button className="confirmButton" onClick={deleteData}>
                <i className="bi bi-check2"></i>
              </button>
              <button className="cancelButton" onClick={toggleModal}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAnimal;
