import React, { useState } from 'react'
import '../styles/component/sliderContent.css'

function SliderContent() {
    
    const sliderArr = [
        {title: 'ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ', 
            imgeses: 'imges/icon/capm.svg',
            desck: [`Программа обучения корректируется под каждую смену`,
                `На проекте работают профессиональные преподаватели-эксперты всероссийского чемпионатного движения «Профессионалы» (студенты им только помогают!)`,
                `Встреча с экспертами ИТ-отрасли`, `Знакомство с виртуальной средой`,`Лайфхаки от эксперта всероссийского чемпионатного движения «Профессионалы»` ]
            },
        {title: 'ВСЕСТОРОННЕЕ РАЗВИТИЕ ТВОРЧЕСКОГО ПОТЕНЦИАЛА', 
            imgeses: 'imges/icon/creation.svg',
            desck: [`Улучшение навыков коммуникации, целеполагания, тайменеджмента и самопрезентации по уникальной программе мини-тренингов`,
                `Участники развивают навыки сотрудничества и умения работать в команде, опираясь на свои сильные стороны`,
                `Квесты, спортивные и развивающие игры` ]
            },
            {title: 'ТЕРРИТОРИЯ РАЗВИТИЯ И ОТДЫХА С ПОЛЬЗОЙ', 
                imgeses: 'imges/icon/rest.svg',
                desck: [`Закрытая охраняемая территория, оборудованные компьютерные аудитории, кинозал с большим экраном, аудитория для тренингов, собственная спортивная площадка.`,
                    `Поздний завтрак, вкусное горячее питание из кафе «Сицилия», полдник. Фрукты – каждый день!`,
                    `Поход в огромный бассейн St.Tropez pool cafe` ]
                }
        ];

    const [slideTab, setSlideTab] = useState(sliderArr[0])
        
  return (
    <div className='sliderContent'>
        <div className='sliderContent__content-navbar'>
            <div className='menuSlider'>
                <button onClick={() => setSlideTab(sliderArr[0])}>Навыки</button>
                <button onClick={() => setSlideTab(sliderArr[1])}>Творчество</button>
                <button onClick={() => setSlideTab(sliderArr[2])}>Отдых</button>
            </div>
        </div>
        <div className="sliderContent__card">    
            <img src={slideTab.imgeses} alt="capm" />   
            <div className='sliderContent__card-text'>
                <h3>{slideTab.title}</h3>
                    <div className='sliderContent-text'>
                        {slideTab.desck.map((obj)=>(
                            <p>{obj}</p>
                        ))}
                    </div>  
            </div>
        </div>
    </div>
  )}

export default SliderContent