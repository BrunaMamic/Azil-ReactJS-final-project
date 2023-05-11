/* eslint-disable @typescript-eslint/no-explicit-any */
import ListNewsData from '../listNewsData';
import './index.css';

const ListNews = (props: any) => {
  return (
    <div className="listDivs">
      {props.listNews.sort((a: any,b: any) => new Date(b.datum)- new Date(a.datum)).map((news: any) => (
        <ListNewsData
          key={news.id}
          id={news.id}
          naslov={news.naslov}
          datum={news.datum}
          tekst={news.tekst}
          vazno={news.vazno}
          setListNews={props.setListNews}
        />
      ))}
    </div>
  );
};

export default ListNews;
