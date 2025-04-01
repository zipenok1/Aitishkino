import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Sections() {
    const inputs = [
        { name: "name", type: "text", placeholder: "Название", required: true },
        { name: "icon", type: "file", placeholder: "Иконка", required: true },
        { name: "title1", type: "text", placeholder: "Название", required: true },
        { name: "title2", type: "text", placeholder: "Название", required: true },
        { name: "description1", type: "textarea", placeholder: "Описание", maxLength: 1200, required: true },
        { name: "description2", type: "textarea", placeholder: "Описание", maxLength: 1200, required: true },
        { name: "description3", type: "textarea", placeholder: "Описание", maxLength: 1200, required: true },
        { name: "description4", type: "textarea", placeholder: "Описание", maxLength: 1200, required: true }
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_sections'
                    inputs = {inputs}
                    title='Секции'
                    apiPoints={{
                    get: "/api/sections/",
                    add: "/api/sections/",
                    edit: "/api/sections",
                    delete: "/api/sections",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <div className='generalAdmin__imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.icon})`}}></div>
                        <p>Название: {el.name}</p>
                        <p>Название: {el.title1}</p>
                        <p>Название: {el.title2}</p>
                        <p>Название: {el.description1}</p>
                        <p>Название: {el.description2}</p>
                        <p>Название: {el.description3}</p>
                        <p>Название: {el.description4}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Sections