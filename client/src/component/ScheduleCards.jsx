import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'

function ScheduleCards({apiPoints, idKey}) {

  const [date, setDate] = useState([])
  const [schedule, setSchedule] = useState([])

    const getApp = async (id) => {
        const res = await $host.get(apiPoints.get);
        setDate(res.data);
    };
    const getSchedule = async (id) =>{
      const one = await $host.get(`${apiPoints.getOne}/${id}`);
      setSchedule(one.data)
    }
    
    useEffect(() => {
        getApp();
        getSchedule(1)
      }, []);

  return (
    <div className='scheduleCards'>
      <div className='scheduleCards__navigation'>
        {date.map((el)=>(
            <div key={el.id_daySchedule} className='scheduleDay__box' onClick={() => getSchedule(el.id_daySchedule)}>
              <p className='scheduleCards-title'>{el.name}</p>
            </div>
        ))}
      </div>
      <div className='scheduleCards__content'>
        {schedule.map((el)=>(
          <div key={el.id_schedule} className='schedule__box'>
            <p className='scheduleCards-title'>{el.schedule}</p>
            <p className='scheduleCards-desc'>{el.time}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ScheduleCards