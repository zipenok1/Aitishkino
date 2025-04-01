import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Schedule() {
    const inputs = [
        { name: "name", type: "text", placeholder: "Название", required: true },
        { name: "schedule", type: "text", placeholder: "Описание", required: true },
        { name: "time", type: "text", placeholder: "Време", required: true },
        { name: "id_daySchedule", type: "text", placeholder: "День недели", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_schedule'
                    inputs = {inputs}
                    title='расписание'
                    apiPoints={{
                    get: "/api/schedule/",
                    add: "/api/schedule/",
                    edit: "/api/schedule",
                    delete: "/api/schedule",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.name}</p>
                        <p>Название: {el.schedule}</p>
                        <p>Название: {el.time}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Schedule