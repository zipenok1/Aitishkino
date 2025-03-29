import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Reviews() {
    const inputs = [
        { name: "fio", type: "text", placeholder: "Ф.И.О", required: true },
        { name: "review", type: "textarea", placeholder: "Отзыв", maxLength: 200, required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_reviewes'
                    inputs = {inputs}
                    title='Отзывы'
                    apiPoints={{
                    get: "/api/reviews/",
                    add: "/api/reviews/",
                    edit: "/api/reviews",
                    delete: "/api/reviews",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Имя: {el.fio}</p>
                        <p>Отзыв: {el.review}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Reviews