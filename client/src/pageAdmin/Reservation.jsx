import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Reservation() {
    const inputs = [
        { name: "fio", type: "text", placeholder: "Ф.И.О", required: true },
        { name: "email", type: "email", placeholder: "Почта", required: true },
        { name: "phone", type: "tel", placeholder: "Номер телнфона", required: true },
        { name: "quantity", type: "text", placeholder: "Количество", required: true },
        { name: "id_shifts", type: "text",placeholder: "Связь", required: true },
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_reservation'
                    inputs = {inputs}
                    title='Бронь'
                    apiPoints={{
                    get: "/api/reservation/",
                    add: "/api/reservation/",
                    edit: "/api/reservation",
                    delete: "/api/reservation",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p>Название: {el.fio}</p>
                        <p>Описание: {el.email}</p>
                        <p>Дата: {el.phone}</p>
                        <p>Дата: {el.quantity}</p>
                        <p>Дата: {el.id_shifts}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Reservation


