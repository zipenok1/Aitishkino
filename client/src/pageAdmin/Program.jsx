import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Program() {
    const inputs = [
        { name: "title", type: "text", placeholder: "Название", required: true },
        { name: "description", type: "textarea", placeholder: "Описнаие", maxLength: 200, required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_program'
                    inputs = {inputs}
                    title='Программа'
                    apiPoints={{
                    get: "/api/program/",
                    add: "/api/program/",
                    edit: "/api/program",
                    delete: "/api/program",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.title}</p>
                        <p>Описание: {el.description}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Program