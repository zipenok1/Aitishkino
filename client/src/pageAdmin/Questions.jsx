import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Questions() {
    const inputs = [
        { name: "title", type: "text", placeholder: "Вопрос", required: true },
        { name: "description", type: "textarea", placeholder: "Ответ", required: true }
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_questions'
                    inputs = {inputs}
                    title='Часто задаваемые вопросы'
                    apiPoints={{
                    get: "/api/questions/",
                    add: "/api/questions/",
                    edit: "/api/questions",
                    delete: "/api/questions",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.title}</p>
                        <p>Название: {el.description}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Questions