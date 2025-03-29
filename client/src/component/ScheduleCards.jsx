import React from 'react'

function ScheduleCards({content}) {
  
  return (
    <div className='scheduleCards'>
      {
        content.map((el)=>(
          <div>
            <p className='scheduleCards-title'>{el.name}</p>
            <p className='scheduleCards-desc'>{el.time}</p>
          </div>
         
        ))}
    </div>
  )
}

export default ScheduleCards