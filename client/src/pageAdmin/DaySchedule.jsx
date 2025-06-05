import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function DaySchedule() {
    const inputs = [
        { name: "name", type: "text", placeholder: "Название", required: true }
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_daySchedule'
                    inputs = {inputs}
                    title='День недели'
                    apiPoints={{
                    get: "/api/daySchedule/",
                    add: "/api/daySchedule/",
                    edit: "/api/daySchedule",
                    delete: "/api/daySchedule",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.name}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default DaySchedule