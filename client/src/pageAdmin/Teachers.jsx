import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Teachers() {
    const inputs = [
        { name: "link_img", type: "file", required: true },
        { name: "fio", type: "text", placeholder: "Ф.И.О", required: true },
        { name: "description", type: "textarea", placeholder: "Описнаие", maxLength: 200, required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_teachers'
                    inputs = {inputs}
                    title='Команда'
                    apiPoints={{
                    get: "/api/teachers/",
                    add: "/api/teachers/",
                    edit: "/api/teachers",
                    delete: "/api/teachers",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.fio}</p>
                        <p>Описание: {el.description}</p>
                        <div className='generalAdmin__imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Teachers