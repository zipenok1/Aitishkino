import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'

function QuestionsCards({apiPoints}) {

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
        {
            date.map((el)=>(
            <div key={el.id_program}>
                <p className='questionsCards-title'>{el.title}</p>
                <p className='questionsCards-top'>{el.description}</p>
            </div> 
        ))}
        
    </div>
  )
}

export default QuestionsCards