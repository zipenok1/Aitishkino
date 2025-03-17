import React, { useState, useEffect } from 'react'
import SliderContent from '../component/SliderContent'
import Newsletter from '../component/Newsletter'
import {$host} from '../http/index'
import '../styles/homePage/banner.css'
import '../styles/homePage/mainCamp.css'
import '../styles/homePage/partners.css'
import '../styles/homePage/direction.css'

function Home() {

  const [date, setDate] = useState([])

  useEffect(()=>{
    $host.get(`api/photo/1`)
      .then((res)=>{
        setDate(res.data)
      })   
  },[])

  return (
    <div className='home'>
      <div className='banner'>
      <div className="banner__content wrap">
        <h1>Лагерь<br/><span>юных програмистов</span></h1>
        <p>Программа Айтишкино поможет развить у участников проекта уверенность в себе, повысить знании в области информационных технологий, приобрести новых друзей и сделать первый шаг к осознанному выбору профессии</p>
        <button className='generalBtm'>Оформить бронь <img src="imges/buttonBanner.svg" alt="buttonBanner"/></button>
        </div>
      </div>
      <div className='mainCamp'>
        <div className="mainCamp__content wrap">
            <h2>О лагере</h2>
              <SliderContent/>
                <div className='sliderContent__gallery'>
                  {date.map((el)=>(
                    <img key={el.id_photo} src={`http://localhost:5000/` + el.link_img}/>
                  ))}
                </div>
                  <Newsletter/>
        </div>
      </div>
      <div className='partners'>    
        <div className='partners__content wrap'>
            <h2>Наши партнеры</h2>
                <div className='partners__content-card'>
                    <div>
                        <img src="imges/rksi.png" alt="rksi" />
                    </div>
                    <div>
                        <img src="imges/invest.jpg" alt="invest" />
                    </div>
                    <div>
                        <img src="imges/school.jpg" alt="school" />
                    </div>
                    <div>
                        <img src="imges/it.jpg" alt="it"/>
                    </div>
                </div>
        </div>
    </div>
    <div className="direction">
      <div className="direction__content wrap">
        <h2>Направления</h2>
        <div className='direction__content-card'>
          <div className='direction__card-hard'>
              <div className="card__hard-text">
                <h3>Развитие hard skills</h3>
                <p>программированию обучают преподаватели кафедры программирования. Участники при чутком руководстве профессионалов будут делать свой сайт, изучать популярные языки программирования</p>
              </div>
              <img src="imges/hard.png" alt="hard" />
          </div>

          <div className='direction__card-soft'>
          <img src="imges/soft.png" alt="soft" />
            <div className="card__soft-text">
                <h3>Развитие soft skills</h3>
                <p>уникальная программа психологов - дети разовьют навыки коммуникации, целеполагания, тайм-менеджмента. Командообразование: участники развивают навыки сотрудничества и умения работать в команде, опираясь на свои сильные стороны</p>
              </div>
          </div>
        </div>
         
      </div>
    </div>

    </div>
  )
}

export default Home