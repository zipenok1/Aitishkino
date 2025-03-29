import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import '../styles/homePage/teachers.css'

function TeachersCards({apiPoints}) {

    const [date, setDate] = useState([])
    const getApp = async () => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };
      
    useEffect(() => {
        getApp();
      }, []);

  return (
    <div className='cards'>
        {date.map((el)=>(
            <div key={el.id_teachers} className='teachers__cards'>
                <div className='teachers__cards-img' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                <p className='teachers__cards-title'>{el.fio}</p> 
                <p className='teachers__cards_desc'>{el.description}</p>
            </div>
        ))}
    </div>
  )
}

export default TeachersCards