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
      console.log(date);

  return (
    <div className='newsPageCards'>
        {date.map((el)=>(
            <div key={el.id_events}>
                <p className='newsPageCards-title'>{el.title}</p>
                <p className='newsPageCards-desc'>{el.description}</p>
                <p className='newsPageCards-date'>{el.date}</p>
            </div>
        ))}
    </div>
  )
}

export default NewsPageCards