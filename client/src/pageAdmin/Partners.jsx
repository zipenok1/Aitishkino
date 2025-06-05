import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Partners() {
    const inputs = [
        { name: "link_img", type: "file" },
        { name: "name", type: "text", placeholder: "Название", required: true },
        { name: "link_partners", type: "text", placeholder: "Ссылка", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_partners'
                    inputs = {inputs}
                    title='Партнеры'
                    apiPoints={{
                    get: "/api/partners/",
                    add: "/api/partners/",
                    edit: "/api/partners",
                    delete: "/api/partners",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <div className='generalAdmin__imges-part' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                        <p>Название: {el.name}</p>
                        <p>Ссылка: {el.link_partners}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Partners