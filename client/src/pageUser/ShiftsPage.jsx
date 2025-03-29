import React from 'react'
import Cover from '../component/Cover'
import OurShiftsCards from '../component/OurShiftsCards'
import Newsletter from '../component/Newsletter'
import QuestionsCards from '../component/QuestionsCards'
import ReviewCards from '../component/ReviewCards'
import '../styles/userStyles/shifts.css'

function ShiftsPage() {

  return (
    <div className='shifts'>
      <Cover
          imgUrl = 'imges/cover2.jpg'
          title = 'Лагерь юных программистов'
          appointment = 'Главная / Программа смен'
          location = 'Программа смен'
        />
      <div className="ourShifts">
        <div className="ourShifts__content wrap">
          <h2>Сроки проведения</h2>
          <p className='ourShifts__content-desc'>МЫ ОРГАНИЗУЕМ ВСЕ ЧТО НУЖНО: ЗНАНИЯ, ОТДЫХ И САМОЕ ПРИЯТНОЕ — АТМОСФЕРУ!</p>
          <div className='ourShifts__cards'>
              <OurShiftsCards
                apiPoints={{
                  getOne: "/api/shifts/1",
                  getTwo: "/api/shifts/2",
                  getThree: "/api/shifts/3",
                  add: "/api/reservation/",
                }}
              />
          </div>
        </div>
      </div>
      <div className="program">
        <div className="program__content wrap">
        <Newsletter/>
          <h2>Программа смен</h2>
          <div className='program__content-cards'>
            <QuestionsCards
              apiPoints={{
                get: "/api/program/",
              }}
            />   
          </div>
        </div>
      </div>
      <div className="review">
        <div className="review__content wrap">
              <h2>Что говорять клиенты</h2>
              <div className='review__content-cards'>
              <ReviewCards
                  apiPoints={{
                    get: "/api/reviews/",
                  }}
                />
              </div>
        </div>
      </div>
    </div>
  )
}
export default ShiftsPage