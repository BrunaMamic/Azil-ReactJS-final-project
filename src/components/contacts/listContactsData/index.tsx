import './index.css';

const ListContactsData = (props: any) => {
  
  return (
    <div className="contactInfo">
      <div className="infos">
        <b>
          {props.firstName} {props.lastName}
        </b>
        <br></br>
        <b>Contact: </b>
        {props.email}
        <b>Message: </b>
        {props.message}
      </div>
    </div>
  );
};
export default ListContactsData;
