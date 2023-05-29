/* eslint-disable @typescript-eslint/no-explicit-any */
import './index.css';
const MoreInfo = (props: any) => {
  return (
    props.modal && (
      <div>
        <div className="moreDetails" onClick={() => props.setModal(false)} />
        <div className="details">
          <div className="details2">
            <div className='imageAbout'>
              {props.image ? (
                <img height={'200px'} width={'200px'} src={props.image} />
              ) : (
                <div className="imgPlaceholder" />
              )}
            </div>
            <div className='petInfo'>
              <h2>Type: {props.vrsta}</h2>
              <div>
                <h3>Name: {props.ime}</h3>
              </div>
              <div style={{fontStyle:"italic", fontSize:"1.1rem"}}>
                {props.opis}
              </div>
              <br></br>

              <div>Chiped: {props.cip ? 'Yes' : 'No'} </div>
              <br></br>
              <div>Age: {props.godine} </div>
              <br>
              </br>
              <div>Last vet visit: {props.pregled} </div>
              <br></br>
              <div>
                {props.adopted ? (
                  <div style={{backgroundColor:"#fd4949b0"}}>ADOPTED</div>
                ) : (
                  <div style={{backgroundColor:"#45af52b0"}}>AVAILABLE FOR ADOPTION</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MoreInfo;
