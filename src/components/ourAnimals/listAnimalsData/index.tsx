/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import {useContext, useState} from 'react';
import {RoleContext} from '../../../context';
import EditAnimals from '../editAnimals';
import MoreInfo from '../moreInfo';
import './index.css';

const ListAnimalsData = (props: any) => {
  const [modal, setModal] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [updateModal, setUpdateModal] = useState(true);

  const [disable, setDisable] = useState(false);

  const [adopted, setAdopted] = useState(props.udomljen);
  const [adoptedModal, setAdoptedModal] = useState(false);

  const [important, setImportant] = useState<boolean>(props.udomljen);

  const role = useContext(RoleContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const edit = () => {
    setUpdateModal(false);
    setToggleUpdate(true);
  };

  function send() {
    axios
      .patch('http://localhost:3001/zivotinje/' + props.id, {
        udomljen: true,
      })
    setImportant(!important);
    setAdopted(!adopted);
    setAdoptedModal(true);
    setDisable(true);
  }

  return (
    <>
      <div className={`edit ${important}`}>
        <div className="forDivs">
          <div
            style={{
              marginTop: '10px',
              borderRadius: '50px',
              overflow: 'hidden',
            }}>
            <div className="editModal">
              {role.isAdmin && updateModal && (
                <button className="updateButton" onClick={() => edit()}>
                  <i className="bi bi-pencil-square"></i>
                </button>
              )}
              {props.image ? (
                <img height={'200px'} width={'200px'} src={props.image} />
              ) : (
                <div className="imgPlaceholder" />
              )}
            </div>
          </div>
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <h4> {props.ime}</h4>
            <div>{adopted ? <div>ADOPTED</div> : <div></div>}</div>
          </div>

          <div className="actionContainer">
            <div>
              <button onClick={toggleModal} className="moreButton">
                <i className="bi bi-info-lg"></i>
              </button>
            </div>

            {!adopted && (
              <div className="adoptButton">
                <button
                  onClick={send}
                  disabled={disable}
                  className="adoptButton">
                  ADOPT
                </button>
              </div>
            )}
            {adoptedModal && (
              <div className="adoptedModal">
                <div className="container">
                  <button
                    onClick={() => setAdoptedModal(false)}
                    className="close"></button>
                  <h3>Thank you for adopting {props.ime}</h3>
                  <p>Please, enter you e-mail so that we can contact you!!</p>

                  <form className="adoptionForm">
                    <input type="email" placeholder="e-mail" />
                    <button
                      onClick={() => setAdoptedModal(false)}
                      className="submitContact">
                      SEND
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {toggleUpdate && (
            <EditAnimals
              id={props.id}
              animal={props}
              SetOurAnimals={props.SetOurAnimals}
              setToggle={setToggleUpdate}
              updateModal={setUpdateModal}
              modal={modal}
              setModal={setModal}
            />
          )}
        </div>
      </div>

      <MoreInfo
        vrsta={props.vrsta}
        ime={props.ime}
        image={props.image}
        cip={props.cip}
        godine={props.godine}
        opis={props.opis}
        pregled={props.pregled}
        udomljen={props.udomljen}
        toggleModal={toggleModal}
        modal={modal}
        setModal={setModal}
        adopted={adopted}
      />
    </>
  );
};

export default ListAnimalsData;
