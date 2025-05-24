import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
        <Splide
            options={{
            type: 'loop',
            perPage: 4,
            perMove: 1,
            width: '100%',
            gap: '15px',
            pagination: false,
            arrows: false,
            focus: 'left',
            autoplay: true, 
            interval: 2600,  
            pauseOnHover: true, 
            breakpoints:{
                1501: {
                    perPage: 3,
                    perMove: 1,
                },
                1030: {
                    perPage: 2,
                    perMove: 1,
                },
                450:{
                    perPage: 1,
                    perMove: 1,
                },
            }
            }}
        >
        {date.map((el)=>(
            <SplideSlide>
                <a key={el.id_partners} href={el.link_partners}>
                    <div className='partners__box-cards'>
                        <img key={el.id_photo} src={process.env.REACT_APP_API_URL + `/` + el.link_img}/>  
                        <p>{el.name}</p>               
                    </div>
                </a>
            </SplideSlide>
        ))}
        </Splide>
    </div>
  )
}
export default PhotoPartners