/* eslint-disable @typescript-eslint/no-explicit-any */
import {useContext, useState} from 'react';
import {RoleContext} from '../../../context';
import DeleteDonations from '../deleteDonations';
import './index.css';

const LookingForDonation = (props: any) => {
  const [idToDelete, setIdToDelete] = useState();
  const role = useContext(RoleContext);

  return (
    <>
      <div className={'donationSubtitle'}>LOOKING FOR</div>
      <div className={'section'}>
        {props.donations
          .filter((x: any) => x.kategorija === 'trazi')
          .map((x: any) => (
            <div key={x.id} className={'donationRow'}>
              <div className="donationEdit">
                <div className='contentDonation'>
                  <div className={'donationProp'}>
                    <b>Type:</b> {x.tip}
                  </div>
                  <div className={'donationProp'}>
                    <b>VALUE (€):</b>
                    {x.vrijednost}
                  </div>
                  <div className={'donationPropDesc'}>
                    <b>ABOUT:</b>
                    {x.opis}
                  </div>
                </div>

                <div className={'actionRow'}>
                  {role.isAdmin ? (
                    <>
                      <button
                        onClick={() => props.changeStatusToDonated(x)}
                        className={'actionBtn'}>
                        <i className="bi bi-box2-heart-fill"></i>
                      </button>
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
                  ) : (
                    <button
                      onClick={() => props.changeStatusToDonated(x)}
                      className={'actionBtn'}>
                      <i className="bi bi-box2-heart-fill"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default LookingForDonation;
