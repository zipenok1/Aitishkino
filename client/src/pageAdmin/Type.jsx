import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Type() {
    const inputs = [
        { name: "name", type: "text", placeholder: "Название", required: true }
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_type'
                    inputs = {inputs}
                    title='Типы фото'
                    apiPoints={{
                    get: "/api/type/",
                    add: "/api/type/",
                    edit: "/api/type",
                    delete: "/api/type",
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

export default Type