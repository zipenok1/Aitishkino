import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import { Link } from "react-router-dom";
import { SHIFTSPAGE_ROUTE } from "../utils/const";
import SliderContent from '../component/SliderContent'
import Newsletter from '../component/Newsletter'
import PhotoType from '../component/PhotoType'
import TeachersCards from '../component/TeachersCards'
import PhotoPartners from '../component/PhotoPartners';
import Offers from '../component/Offers'
import '../styles/homePage/banner.css'
import '../styles/homePage/mainCamp.css'
import '../styles/homePage/partners.css'
import '../styles/homePage/direction.css'
import '../styles/homePage/gallery.css'
import '../styles/homePage/teachers.css'
import '../styles/homePage/question.css'

function Home() {
  const [date, setDate] = useState([])
  const [foto, setFoto] = useState([])
 
  const getApp = async () => {
    try {
      const [res, fot] = await Promise.all([
        $host.get('/api/sections/4'),
        $host.get('/api/sections/5')
      ]);
      setDate(res.data);
      setFoto(fot.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getApp()
  }, []);

  return (
    <div className='home'>
      <div className='banner'>
      <div className="banner__content wrap">
        <h1><span>Каникулы с пользой!</span><br/>Мини-лагерь юных программистов <span>8+</span></h1>
        <p>Программа Айтишкино поможет <span>развить</span> у участников проекта <span>уверенность</span> в себе, повысить <span>знания</span> в области информационных технологий, приобрести новых друзей и сделать первый шаг к <span>осознанному</span> выбору профессии</p>
        <Link to={SHIFTSPAGE_ROUTE}>
          <button className='generalBtm'>
            Оформить бронь <img src="imges/buttonBanner.svg" alt="buttonBanner"/>
          </button>
        </Link>
      </div>
      </div>
      <div className='mainCamp'>
        <div className="mainCamp__content wrap">
            <h2>О лагере</h2>
              <SliderContent
                apiPoints={{
                  get1: "/api/sections/1",
                  get2: "/api/sections/2",
                  get3: "/api/sections/3",
                }}
              />
                <div className='sliderContent__gallery'>
                  <PhotoType
                    apiPoints={{
                      get: "/api/photo/1",
                      }}
                  />
                </div>
        </div>
      </div>
      <div className='partners'> 
        <div className='partners__content wrap'>
        <Newsletter/>   
            <h2>Наши партнеры</h2>
                <div className='partners__content-card'>
                <PhotoPartners
                  apiPoints={{
                    get: "/api/partners",
                  }}
                />
                </div>
        </div>
    </div>
    <div className="direction">
      <div className="direction__content wrap">
        <h2>Направления</h2>
        <div className='direction__content-card'>
          <div className='direction__card-hard'>
            {date.map((el)=>(
              <div key={el.id_sections} className="card__hard-text back_down-left">
                <h3>{el.title1}</h3>
                <p>{el.description1}</p>
              </div>
            ))}
              <PhotoType
                apiPoints={{
                  get: "/api/photo/oline/3",
                }}
              />
          </div>
          <div className='direction__card-soft'>
            <PhotoType
              apiPoints={{
                get: "/api/photo/oline/4",
              }}
            />
            {date.map((el)=>(
              <div key={el.id_sections} className="card__soft-text back_down-right">
                <h3>{el.title2}</h3>
                <p>{el.description2}</p>
              </div>
            ))} 
          </div>
        </div>       
      </div>
    </div>
     <div className="gallery">
        <div className="gallery__content wrap">
            <h2>Фотогалерея</h2>
            <p>{foto[0]?.description1}</p>
            <div className='gallery__content-grid'>
              <PhotoType
                apiPoints={{
                  get: "/api/photo/3",
                }}
              />
              <button className='generalBtm'>
                <a href="https://vk.com/albums-227013121">Больше фото на</a>
                <img src="imges/icon/vk.svg" alt="vk" />
              </button>
            </div>
        </div>
      </div>   
      <div className="teachers">
        <div className="teachers__content wrap">
          <h2>Команда проекта</h2>
          <div className="teachers__content-cards">
            <TeachersCards
              apiPoints={{
                get: "/api/teachers/",
              }}
            />
          </div>
        </div>
      </div>
      <div className='video'>
        <video autoPlay muted loop>
          <source src="video/aitishka.mp4" type='video/mp4' />
        </video>
      </div>
      <div className="question">
        <Offers/>
      </div>
    </div>
  )
}

export default Home