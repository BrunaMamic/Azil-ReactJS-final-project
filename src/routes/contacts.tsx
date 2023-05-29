import axios from 'axios';
import {useEffect, useState} from 'react';
import ListContacts from '../components/contacts/listContacts';

export default function Contacts() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/BrunaMamic/azil-server/contact/').then(res => {
      setContactInfo(res.data);
    });
  }, []);
  return (<>
    <ListContacts contactInfo={contactInfo} setContactInfo={setContactInfo}/>
  </>);
}
