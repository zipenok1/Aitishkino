import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Event() {
    const inputs = [
        { name: "icon", type: "file" },
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
                        <div className='generalAdmin__imges' style={{backgroundImage:`url(${process.env.REACT_APP_API_URL}/${el.icon})`}}></div>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Event