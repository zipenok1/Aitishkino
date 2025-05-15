import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import Cover from '../component/Cover'
import ScheduleCards from '../component/ScheduleCards'
import QuestionsCards from '../component/QuestionsCards'
import '../styles/shiftsPage/informationPage.css'
import PhotoType from '../component/PhotoType'

function InformationPage() {
  
  const [date, setDate] = useState([])
  const [supervisor, setSupervisor] = useState([])

  const getApp = async () => {
    const res = await $host.get('/api/sections/6');
    setDate(res.data);
  };
  const getSupervisor = async () => {
    const res = await $host.get('/api/sections/7');
    setSupervisor(res.data);
  };

  useEffect(() => {
      getApp()
      getSupervisor()
  }, []);
  
  

  return (
    <div className='informationPage'>
        <Cover
          imgUrl = 'imges/cover1.jpg'
          title = 'Лагерь юных программистов'
          appointment = 'Главная / Информация'
          location = 'Информация'
        />
        <div className="schedule">
          <div className="schedule__content wrap">
              <h2>Расписание</h2>
              <div className='schedule__content-container'>
                <div className='schedule__container-left'>
                  <h3>{date[0]?.title1}</h3>
                  <p>{date[0]?.description1}</p>
                </div>
                <div className="schedule__container-right">
                  <ScheduleCards
                      idKey = 'id_daySchedule'
                      apiPoints={{
                      get: "/api/daySchedule/",
                      getOne: "/api/schedule/",
                      }}
                  />
                </div>
              </div>
          </div>
        </div>
        <div className="supervisor">
          <div className="supervisor__content wrap">
            <h2>Руководитель проекта</h2>
            <div className='direction__content-card'>
              <div className='direction__card-soft'>
                <PhotoType
                  apiPoints={{
                    get: "/api/photo/oline/17",
                  }}
                />
                <div className="card__soft-text back_down-right">
                    <h3>{supervisor[0]?.title2}</h3>
                    <p>{supervisor[0]?.description2}</p>
                  </div>
              </div>
              <div className='direction__card-hard'>
                  <div className="card__hard-text back_down-left">
                    <h3>{supervisor[0]?.title1}</h3>
                    <p>{supervisor[0]?.description1}</p>
                  </div>
                  <PhotoType
                    apiPoints={{
                      get: "/api/photo/oline/16",
                    }}
                  />
              </div>
            </div> 
          </div>
        </div>
        <div className="questions">
          <div className="questions__content wrap">
            <h2>Часто задаваемые<br />вопросы</h2>
            <div className='questions__content-cards'>
                <QuestionsCards
                  apiPoints={{
                    get: "/api/questions/",
                  }}
                />
            </div>
          </div>
        </div>
        <div className="whereAre">
          <div className="whereAre__content wrap">
            <h2>Где мы</h2>
              <div className='whereAre-map'>
                <iframe 
                  src="https://yandex.ru/map-widget/v1/org/tsentr_operezhayushchey_professionalnoy_podgotovki/244391124448/?ll=39.645733%2C47.207567&source=serp_navig&z=18" 
                  width="100%" 
                  height="700" 
                  allowFullScreen="true" 
                  title="Yandex Map of Kommunisticheskiy Prospekt 11/2"
                />
                <img src="imges/mapPreview.jpg" alt="mapPreview"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default InformationPage

