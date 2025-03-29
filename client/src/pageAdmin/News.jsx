import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function News() {
    const inputs = [
        { name: "link_img", type: "file", required: true },
        { name: "title", type: "text", placeholder: "Название", required: true },
        { name: "description", type: "textarea", placeholder: "Описнаие", maxLength: 1200, required: true },
        { name: "date", type: "date", placeholder: "Дата", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_news'
                    inputs = {inputs}
                    title='Новости'
                    apiPoints={{
                    get: "/api/news/",
                    add: "/api/news/",
                    edit: "/api/news",
                    delete: "/api/news",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <div className='generalAdmin__imges' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.link_img})`}}></div>
                        <p>Название: {el.title}</p>
                        <p>Описание: {el.description}</p>
                        <p>Дата: {el.date}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default News