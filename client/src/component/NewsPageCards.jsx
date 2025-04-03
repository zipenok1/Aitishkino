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
                <div className='newsPageCards__icon' style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.icon})` }}></div>
            </div>
        ))}
    </div>
  )
}

export default NewsPageCards