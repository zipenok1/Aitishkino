import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Event() {
    const inputs = [
        { name: "title", type: "text", placeholder: "Название", required: true },
        { name: "description", type: "textarea", placeholder: "Описнаие", maxLength: 200, required: true },
        { name: "date", type: "date", placeholder: "Дата", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_events'
                    inputs = {inputs}
                    title='Мероприятия'
                    apiPoints={{
                    get: "/api/events/",
                    add: "/api/events/",
                    edit: "/api/events",
                    delete: "/api/events",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.title}</p>
                        <p>Описание: {el.description}</p>
                        <p>Дата: {el.date}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Event