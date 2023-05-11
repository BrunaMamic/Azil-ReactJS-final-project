/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import {useContext, useState} from 'react';
import {RoleContext} from '../../../context';
import DeleteDonations from '../deleteDonations';
import './index.css';

const Donated = (props: any) => {
  const role = useContext(RoleContext);
  const [idToDelete, setIdToDelete] = useState();

  const createDonation = async (item: any) => {
    const data = await axios.post('http://localhost:3001/donacije', {
      tip: item.tip,
      vrijednost: item.vrijednost,
      opis: item.opis,
      kategorija: 'trazi',
    });

    props.setDonations((prev: any) => {
      return [...prev, data.data];
    });
  };

  return (
    <>
      <div className={'donationSubtitle'}>DONATED</div>
      <div className={'section'}>
        {props.donations
          .filter((x: any) => x.kategorija === 'donirano')
          .map((x: any) => (
            <div key={x.id} className={'donationRow'}>
              <div className="donationEditDonated">
                <div className="contentDonation">
                  <div className={'donationProp'}>
                    <b>TYPE</b> {x.tip}
                  </div>
                  <div className={'donationProp'}>
                    <b>VALUE (€)</b>
                    {x.vrijednost}
                  </div>
                  <div className={'donationPropDesc'}>
                    <b>ABOUT</b>
                    {x.opis}
                  </div>
                </div>
                <div className={'actionRow'}>
                  {role.isAdmin && (
                    <>
                      <div
                        onClick={() => createDonation(x)}
                        className={'actionBtn'}>
                        <i className="bi bi-repeat"></i>
                      </div>
                      <div
                        onClick={() => setIdToDelete(x.id)}
                        className={'actionBtn'}>
                        <DeleteDonations
                          idToDelete={idToDelete}
                          setIdToDelete={setIdToDelete}
                          setDonations={props.setDonations}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Donated;
