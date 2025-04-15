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
        { name: "phone", type: "tel", placeholder: "Номер телефона", required: true },
        { name: "quantity", type: "text", placeholder: "Количество мест", required: true },
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
                        type='table'
                        idKey='id_reservation'
                        inputs={inputs}
                        title='Бронь'
                        apiPoints={{
                            get: "/api/reservation/",
                            add: "/api/reservation/",
                            edit: "/api/reservation",
                            delete: "/api/reservation",
                        }}
                        renderItem={(data,  { deleteApp }) => (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ФИО</th>
                                        <th>ФИО Ребенка</th>
                                        <th>Возраст</th>
                                        <th>Образование</th>
                                        <th>Email</th>
                                        <th>Телефон</th>
                                        <th>Количество мест</th>
                                        <th>Какая смена</th>
                                        <th>Время для звонка</th>
                                        <th>Откуда узнали</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(el => (
                                        <tr key={el.id_reservation}>
                                            <td>{el.fio}</td>
                                            <td>{el.fioChild}</td>
                                            <td>{el.age}</td>
                                            <td>{el.education}</td>
                                            <td>{el.email}</td>
                                            <td>{el.phone}</td>
                                            <td>{el.quantity}</td>
                                            <td>{el.id_shifts}</td>
                                            <td>{el.call}</td>
                                            <td>{el.found}</td>
                                            <td>
                                                <div className='genericAdminPanelTable__box-butt'>
                                                    <button onClick={() => deleteApp(el['id_reservation'])}>удалить</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    />  
                </div>
            </div>        
        </div>
    )
}

export default Reservation


