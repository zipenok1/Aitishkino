import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Newsletter() {
    const inputs = [
        { name: "email", type: "email", placeholder: "Почта", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_newsletter'
                    inputs = {inputs}
                    title='Рассылка'
                    apiPoints={{
                    get: "/api/newsletter/",
                    add: "/api/newsletter/",
                    edit: "/api/newsletter",
                    delete: "/api/newsletter",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Почта: {el.email}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Newsletter