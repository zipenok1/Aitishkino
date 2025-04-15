import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Shifts() {
    const inputs = [
        { name: "title", type: "text", placeholder: "Название", required: true },
        { name: "date", type: "date", placeholder: "Дата", required: true },
        { name: "description", type: "textarea", placeholder: "Описание", maxLength: 200, required: true },
        { name: "price", type: "text", placeholder: "Цена", required: true },
        { name: "partprice", type: "text", placeholder: "Цена для партнеров", required: true },
        { name: "link_img", type: "file" },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    exists = 'no'
                    idKey='id_shifts'
                    inputs = {inputs}
                    title='Смены'
                    apiPoints={{
                    get: "/api/shifts/",
                    add: "/api/shifts/",
                    edit: "/api/shifts",
                    delete: "/api/shifts",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.title}</p>
                        <p>Дата: {el.date}</p>
                        <p>Описание: {el.description}</p>
                        <p>Цена: {el.price}</p>
                        <p>Цена для партнеров: {el.partprice}</p>
                        <div className='generalAdmin__imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Shifts