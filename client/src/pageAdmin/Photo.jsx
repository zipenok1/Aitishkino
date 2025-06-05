import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Photo() {
    const inputs = [
        { name: "link_img", type: "file"},
        { name: "id_type", type: "text", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_photo'
                    inputs = {inputs}
                    title='Фотографии'
                    apiPoints={{
                    get: "/api/photo/",
                    add: "/api/photo/",
                    edit: "/api/photo",
                    delete: "/api/photo",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <div className='generalAdmin__imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                        <p>Секция фотографии: {el.id_type}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Photo