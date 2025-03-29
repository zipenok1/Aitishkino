import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function ReviewCards({apiPoints}) {

    const [date, setDate] = useState([])

    const getApp = async () => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };
      
    useEffect(() => {
        getApp();
      }, []);

  return (
    <div className='reviewCards'>
        <Splide
            options={{
            type: 'slide',
            perPage: 2,
            perMove: 2,
            gap: '10px',
            pagination: false,
            arrows: true,
            focus: 'center',
            interval: 3000, 
            pauseOnHover: true, 
            breakpoints:{
                1058:{
                    perPage: 1,
                    perMove: 1,
                }
            }
            }}
        >
        {date.map((el)=>(
            <SplideSlide>
                <div className='reviewCards__content' key={el.id_reviews}>
                    <h3>{el.fio}</h3>
                    <p>{el.review}</p>
                </div>  
            </SplideSlide>
            ))}
        </Splide>
    </div>
  )
}

export default ReviewCards
