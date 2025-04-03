import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Reservation() {
    const inputs = [
        { name: "fio", type: "text", placeholder: "Ф.И.О", required: true },
        { name: "fioChild", type: "text", placeholder: "Ф.И.О ребенка", required: true },
        { name: "age", type: "text", placeholder: "Возраст ребенка", required: true },
        { name: "education", type: "text", placeholder: "Наименование образовательной организации", required: true },
        { name: "email", type: "email", placeholder: "Почта", required: true },
        { name: "phone", type: "tel", placeholder: "Номер телнфона", required: true },
        { name: "quantity", type: "text", placeholder: "Количество", required: true },
        { name: "id_shifts", type: "text", placeholder: "Связь", required: true },
        { name: "call", type: "text", placeholder: "Время, удобное для нашего звонка", required: true },
        { name: "found", type: "text", placeholder: "Откуда Вы узнали об лагере", required: true },
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
                        <p>Ф.И.О: {el.fio}</p>
                        <p>Ф.И.О ребенка: {el.fioChild}</p>
                        <p>Возраст ребенка: {el.age}</p>
                        <p>Наименование образовательной организации: {el.education}</p>
                        <p>Время, удобное для нашего звонка: {el.call}</p>
                        <p>Почта: {el.email}</p>
                        <p>Телефон: {el.phone}</p>
                        <p>Количество мест: {el.quantity}</p>
                        <p>Номер смены: {el.id_shifts}</p>
                        <p>Откуда Вы узнали об лагере: {el.found}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Reservation


