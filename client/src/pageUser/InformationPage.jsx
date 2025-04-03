import React from 'react'
import Cover from '../component/Cover'
import ScheduleCards from '../component/ScheduleCards'
import QuestionsCards from '../component/QuestionsCards'
import '../styles/shiftsPage/informationPage.css'
import PhotoType from '../component/PhotoType'

function InformationPage() {

  const contentSchedule = [
    {name: 'Регистрация', time: '8:30 - 9:00'},
    {name: 'Заряд бодрости', time: '9:10 - 9:25'},
    {name: 'Открытие смены', time: '9:30 - 10:00'},
    {name: 'Занятие', time: '10:00 - 11:30'},
    {name: 'Завтрак', time: '11:30 - 11:45'},
    {name: 'Занятие', time: '12:00 - 13:30'},
    {name: 'Обед', time: '13:30 - 14:00'},
    {name: 'Занятие', time: '14:00 - 14:30'},
    {name: 'Спорт', time: '15:30 - 16:00'},
    {name: 'Полдник', time: '16:00 - 16:15'},
    {name: 'Кинолекторий', time: '16:15 - 17:15'},
    {name: 'Огонек дружбы', time: '17:15 - 18:00'},
    {name: 'До завтра!', time: '18:00 - 19:00'},
  ]
  
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
                  <h3>Айтишкино</h3>
                  <p>Каждый день в нашем лагере — это новые знания, увлекательные проекты и яркие впечатления! Вы можете посмотреть как примерно выглядит день в нашем лагере.</p>
                </div>
                <div className="schedule__container-right">
                  <ScheduleCards
                      content={contentSchedule}
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
                    <h3>Программа Айтишкино</h3>
                    <p>Поможет развить у участников проекта уверенность в себе, повысить знании в области информационных технологий, приобрести новых друзей и сделать первый шаг к осознанному выбору профессии.</p>
                  </div>
              </div>
              <div className='direction__card-hard'>
                  <div className="card__hard-text back_down-left">
                    <h3>Золотовская Маргарита</h3>
                    <p>Начальник отдела маркетинга и социального партнерства колледжа РКСИ, магистр психологии, опыт активной работы с подростками 8 лет</p>
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.4237396605135!2d39.64125097699666!3d47.208290571155985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3bf2c0fed8bb1%3A0x8d5963d5a3e82115!2z0L_RgC3Rgi4g0JrQvtC80LzRg9C90LjRgdGC0LjRh9C10YHQutC40LksIDExLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMzQ0MDU4!5e0!3m2!1sru!2sru!4v1742694287753!5m2!1sru!2sru" 
                    width="100%" 
                    height="700"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                  />
              </div>
          </div>
        </div>
    </div>
  )
}

export default InformationPage