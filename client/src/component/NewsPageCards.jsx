import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'

function NewsPageCards({apiPoints}) {

    const [date, setDate] = useState([])
    const getApp = async () => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };
      
    useEffect(() => {
        getApp();
      }, []);
      
  return (
    <div className='newsPageCards'>
        {date.map((el)=>(
            <div className='newsPageCards__content' key={el.id_events}>
                <div className='newsPageCards__icon' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.icon})` }}></div>
                <p>{el.name}</p>
            </div>
        ))}
    </div>
  )
}

export default NewsPageCards