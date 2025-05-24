import { useState, useEffect } from 'react'
import {$host} from '../http/index'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
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
                1248: {
                    perPage: 2,
                    perMove: 1,
                },
                870:{
                    perPage: 1,
                    perMove: 1,
                },
            }
            }}
        >
        {date.map((el)=>(
            <SplideSlide>
                <div key={el.id_teachers} className='teachers__cards'>
                    <div className='teachers__cards-img' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                    <p className='teachers__cards-title'>{el.fio}</p> 
                    <p className='teachers__cards_desc'>{el.description}</p>
                </div>
            </SplideSlide>
        ))}
        </Splide>
    </div>
  )
}

export default TeachersCards