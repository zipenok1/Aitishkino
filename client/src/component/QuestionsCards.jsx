import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'

function QuestionsCards({content, apiPoints}) {

    const [date, setDate] = useState(content || [])

    const getApp = async () => {
        if (!apiPoints) {
            return;
        }
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
                {/* <img src="imges/icon/arrow.svg" alt="arrow" /> */}
            </div> 
        ))}
        
    </div>
  )
}

export default QuestionsCards