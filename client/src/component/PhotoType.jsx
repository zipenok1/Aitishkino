import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'

function PhotoType({apiPoints}) {
    
    const [date, setDate] = useState([])
    const getApp = async () => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };
      
    useEffect(() => {
        getApp();
      }, []);

  return (
    <div>
        {date.map((el)=>(
            <img key={el.id_photo} src={process.env.REACT_APP_API_URL + `/` + el.link_img}/> 
        ))}
    </div>
  )
}

export default PhotoType