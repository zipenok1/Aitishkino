import React, { useState, useEffect } from 'react'
import {useLocation} from "react-router-dom";
import {$host} from '../http/index'

function QuestionsCards({apiPoints}) {

    const { pathname } = useLocation();

    const [date, setDate] = useState( [])

    const getApp = async () => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };

    useEffect(() => {
            getApp();
      }, []);

  return (
    <div className='questionsCards'>
        {date.map((el)=>(
            <div key={pathname.includes('/shiftspage') ? el.id_program : el.id_questions}>
                <p className='questionsCards-title'>{el.title}</p>
                <p className='questionsCards-top'>{el.description}</p>
            </div> 
        ))}
        
    </div>
  )
}

export default QuestionsCards