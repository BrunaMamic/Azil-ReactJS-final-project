import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import AddNews from '../components/news/addNews';
import ListNews from '../components/news/listNews';

export default function News() {

  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/BrunaMamic/azil-server/obavijesti/').then(res => {
        setListNews(res.data);
    });
  }, []);

  
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <AddNews setListNews={setListNews} />
      <ListNews setListNews={setListNews} listNews={listNews} />
    </div>
  );
}
