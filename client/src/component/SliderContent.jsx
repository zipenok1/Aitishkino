import React from 'react'
import '../styles/component/sliderContent.css'

function SliderContent() {
  return (
    <div className='sliderContent'>
        <div className='sliderContent__content-navbar'>
            <button>Профессиональные навыки</button>
            <button>Всестороннее развитие творческого потанциала</button>
            <button>Территория развития и отдыха с пользой</button>
        </div>
        <div className="sliderContent__card">
            <img src="imges/icon/capm.svg" alt="capm" />
                <div className='sliderContent__card-text'>
                    <h3>Профессиональные навыки</h3>
                        <div className='sliderContent-text'>
                            <p>Программа обучения корректируется под каждую смену</p>
                            <p>На проекте работают профессиональные преподаватели-эксперты всероссийского <br/>чемпионатного движения «Профессионалы» (студенты им только помогают!)</p>
                            <p>Встреча с экспертами ИТ-отрасли</p>
                            <p>Знакомство с виртуальной средой</p>
                            <p>Лайфхаки от эксперта всероссийского чемпионатного движения «Профессионалы»</p>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default SliderContent