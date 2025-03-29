import React from 'react'
import { Link } from "react-router-dom";
import { SHIFTSPAGE_ROUTE } from "../utils/const";
import SliderContent from '../component/SliderContent'
import Newsletter from '../component/Newsletter'
import PhotoType from '../component/PhotoType'
import TeachersCards from '../component/TeachersCards'
import '../styles/homePage/banner.css'
import '../styles/homePage/mainCamp.css'
import '../styles/homePage/partners.css'
import '../styles/homePage/direction.css'
import '../styles/homePage/gallery.css'
import '../styles/homePage/teachers.css'

function Home() {

  return (
    <div className='home'>
      <div className='banner'>
      <div className="banner__content wrap">
        <h1>Проект карьерной навигации<br/><span>юных программистов</span> в формате городского лагеря <span>8+</span></h1>
        <p>Программа Айтишкино поможет развить у участников проекта уверенность в себе, повысить знании в области информационных технологий, приобрести новых друзей и сделать первый шаг к осознанному выбору профессии</p>
        <Link to={SHIFTSPAGE_ROUTE}>
          <button className='generalBtm'>Оформить бронь <img src="imges/buttonBanner.svg" alt="buttonBanner"/></button>
        </Link>
        </div>
      </div>
      <div className='mainCamp'>
        <div className="mainCamp__content wrap">
            <h2>О лагере</h2>
              <SliderContent/>
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
                <PhotoType
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
              <div className="card__hard-text back_down-left">
                <h3>Развитие hard skills</h3>
                <p>программированию обучают преподаватели кафедры программирования. Участники при чутком руководстве профессионалов будут делать свой сайт, изучать популярные языки программирования</p>
              </div>
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
            <div className="card__soft-text back_down-right">
                <h3>Развитие soft skills</h3>
                <p>уникальная программа психологов - дети разовьют навыки коммуникации, целеполагания, тайм-менеджмента. Командообразование: участники развивают навыки сотрудничества и умения работать в команде, опираясь на свои сильные стороны</p>
              </div>
          </div>
        </div>       
      </div>
    </div>
     <div className="gallery">
        <div className="gallery__content wrap">
            <h2>Фотогалерея</h2>
            <p>Здесь вы сможете погрузиться в яркую атмосферу нашего лагеря, где каждый день наполнен открыиями и весельем. Наши маленькие гении учатся программировать, создавая свои первые проекты, участвуют в увлекательных конкурсах и исследуют мир технологий вместе с новыми друзьями!</p>
            <div className='gallery__content-grid'>
              <PhotoType
                apiPoints={{
                  get: "/api/photo/3",
                }}
              />
              <button className='generalBtm'>
                <a href="https://vk.com/albums-227013121">Больше фото на</a>
                <img src="imges/icon/vk.png" alt="vk" />
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
        {/* <video autoPlay muted loop>
          <source src="video/aitishka.mp4" type='video/mp4' />
        </video> */}
      </div>
    </div>
  )
}

export default Home