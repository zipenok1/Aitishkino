import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Partners() {
    const inputs = [
        { name: "link_img", type: "file" },
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
                        <div className='generalAdmin__imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Partners