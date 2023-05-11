import axios from 'axios';
import {useEffect, useState} from 'react';
import './index.css'

const DeleteDonations = (props: any) => {
  const [dataID, setDataID] = useState(props.idToDelete);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setDataID(props.idToDelete);
  }, [props.idToDelete]);

  async function deleteData() {
    await axios.delete(`http://localhost:3001/donacije/${dataID}`);
    const data = await axios.get('http://localhost:3001/donacije');
    props.setDonations(data.data);
  }
  return (
    <>
      <button onClick={toggleModal} className={'actionBtn'}><i className="bi bi-trash3-fill"></i></button>
      {modal && (
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
      )}
    </>
  );
};
export default DeleteDonations;
