import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Offers() {
    const inputs = [
        { name: "name", type: "text", placeholder: "Имя", required: true },
        { name: "description", type: "textarea", placeholder: "Вопрос", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_offers'
                    inputs = {inputs}
                    title='Вопросы'
                    apiPoints={{
                    get: "/api/offers/",
                    add: "/api/offers/",
                    edit: "/api/offers",
                    delete: "/api/offers",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Имя: {el.name}</p>
                        <p>Вопрос: {el.description}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Offers