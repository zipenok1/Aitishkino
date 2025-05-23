import React, { useState, useEffect } from 'react'
import { NEWSPAGE_ROUTE } from "../utils/const";
import { Link } from "react-router-dom"
import {$host} from '../http/index'
import Cover from '../component/Cover'
import { useParams } from 'react-router-dom'
import '../styles/userStyles/sampleNews.css'

function SampleNews() {
    
    const {id} = useParams()

    const [date, setDate] = useState([])
    const getApp = async () => {
        const res = await $host.get(`api/news/${id}`);
        setDate(res.data);
    };
      
    useEffect(() => {
        getApp();
      }, []);

    return (
    <div className='sampleNews'>
        <Cover
          imgUrl = '/imges/cover4.jpg'
          imgUrlOptimized='imges/cover4Optimized.jpg'
          title = 'Лагерь юных программистов'
          appointment = 'Мероприятия / Активность лагеря'
          location = 'Активность лагеря'
        />
        <div className="sampleNews__content wrap">
          {date.map((el)=>(
            <div className='sampleNews__content-cards'>
              <h2>{el.title}</h2>
              <Link to={NEWSPAGE_ROUTE}><img src="/imges/icon/arrowNews.png" alt="arrowNews" /></Link>
              <div className='sampleNews__cards-imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
              <p className='sampleNews__cards-desc'>{el.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SampleNews