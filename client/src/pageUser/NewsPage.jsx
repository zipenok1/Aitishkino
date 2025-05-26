import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { $host } from '../http/index';
import NewsPageCards from '../component/NewsPageCards';
import Cover from '../component/Cover';
import '../styles/userStyles/newsPage.css';

function NewsPage() {
  const [event, setEvent] = useState([]);
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3); 

  const getApp = async () => {
    try {
      const [res, fot] = await Promise.all([
        $host.get('/api/sections/8'),
        $host.get('/api/news/')
      ]);
      setEvent(res.data);
      setData(fot.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getApp()
  }, []);
  
  const truncateText = (text, limit = 186) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const loadMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 3); 
  };

  return (
    <div className='news'>
      <Cover
        imgUrl='imges/cover3Optimized.jpg'
        title='Лагерь юных программистов'
        appointment='Главная / Мероприятия'
        location='Мероприятия'
      />
      <div className="newsEvents">
        <div className="newsEvents__content wrap">
          <h2>Каникулы с пользой</h2>
          <p className='newsEvents__content-title'>{event[0]?.title1}</p>
          <p className='newsEvents__content-desc'>{event[0]?.description1}</p>
          <div className='newsEvents__content-cards'>
            <NewsPageCards
              apiPoints={{
                get: "/api/events/",
              }}
            />
          </div>
        </div>
      </div>
      <div className="newsCard">
        <div className="newsCard__content wrap">
          <h2>Активность лагеря</h2>
          <div className='newsCard__content-box'>
            {data.slice(0, visibleCards).map((el) => ( 
              <Link to={`/samplenews/${el.id_news}`} key={el.id_news}>
                <div className='newsCard__box'>
                  <div className='newsCard__box-imges' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})` }}></div>
                  <div className='newsCard__box-text'>
                    <p className='newsCard__box-title'>{el.title}</p>
                    <p className='newsCard__box-desc'>{truncateText(el.description)}</p>
                  </div>
                </div>
              </Link>
            ))}
            {visibleCards < data.length && ( 
              <button className='generalBtm' onClick={loadMoreCards}>Еще</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;