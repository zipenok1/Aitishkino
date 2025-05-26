import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import '../styles/component/sliderContent.css'

function SliderContent({ apiPoints }) {
    const [slideTab, setSlideTab] = useState('get1')
    const [date, setDate] = useState([])
    
    const getApp = async (shiftEndpoint) => {
        const res = await $host.get(apiPoints[shiftEndpoint]);
        setDate(res.data);
    };

    useEffect(() => {
        getApp(slideTab);
    }, [slideTab]);
      
    return (
        <div className='sliderContent'>
            <div className='sliderContent__content-navbar'>
                <div className='menuSlider'>
                    <button 
                        onClick={() => setSlideTab('get1')}
                        className={slideTab === 'get1' ? 'active' : ''}
                    >
                        Навыки
                    </button>
                    <button 
                        onClick={() => setSlideTab('get2')}
                        className={slideTab === 'get2' ? 'active' : ''}
                    >
                        Творчество
                    </button>
                    <button 
                        onClick={() => setSlideTab('get3')}
                        className={slideTab === 'get3' ? 'active' : ''}
                    >
                        Отдых
                    </button>
                </div>
            </div>
            
            {date.map((el) => (
                <div key={el.id_sections} className="sliderContent__card">    
                    <img src={process.env.REACT_APP_API_URL + '/' + el.icon} alt='icon'/> 
                    <div className='sliderContent__card-text'>
                        <h3>{el.title1}</h3>
                        <div className='sliderContent-text'>
                            <p>{el?.description1}</p>
                            <p>{el?.description2}</p>
                            <p>{el?.description3}</p>
                            <p>{el?.description4}</p>
                            <p>{el?.description5}</p>
                        </div>  
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SliderContent