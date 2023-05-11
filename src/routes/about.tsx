// import { useForm, SubmitHandler } from "react-hook-form";
// import { Outlet } from "react-router-dom";

import AboutHeader from '../components/about/aboutHeader';
import AboutUs from '../components/about/aboutUs';
import AboutContact from '../components/about/aboutContact';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function About() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/contact/').then(res => {
      setContactInfo(res.data);
    });
  }, []);

  return (
    <div className="home" id="home">
      <AboutHeader />
      <AboutUs />
      <AboutContact contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </div>
  );
}
