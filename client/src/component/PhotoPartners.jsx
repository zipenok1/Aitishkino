import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'


function PhotoPartners({apiPoints}) {

    const [date, setDate] = useState([])
    const getApp = async () => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };
      
    useEffect(() => {
        getApp();
      }, []);
 
  return (
    <div className='partners__box'>
        {date.map((el)=>(
            <div className='partners__box-cards'>
                <img key={el.id_photo} src={process.env.REACT_APP_API_URL + `/` + el.link_img}/>  
                <p>{el.name}</p>
            </div>
                
        ))}
    </div>
  )
}
export default PhotoPartners