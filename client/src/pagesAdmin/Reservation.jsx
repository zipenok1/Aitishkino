import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/const";
import {$authHost , $host} from '../http/index'
import '../styles/generalPages.css'
import Modal from "../component/Modal";

function Reservation() {
    
    const [date, setDate] = useState([])
    const [open, setOpen] = useState({id:'', isModal:false})
    const [text, setText] = useState('');
    const [number, setNumber] = useState('')   
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [quantity, setQuantity] = useState('');
  
    const test = () =>{
        history(ADMIN_ROUTE)
    }

    const history = useNavigate()

    const openModal = (ids, modOP) =>{
        setOpen({id:ids, isModal: !modOP})
    }

    const getApp = async () =>{ 
        const res = await $host.get('api/reservation/receiv')
        setDate(res.data)
    }

    const deleteApp = async (id) =>{
        await $authHost.delete(`api/reservation/del/${id}`)
        getApp()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fio', text);
        formData.append('email', email);
        formData.append('phone', tel);
        formData.append('quantity', quantity);
        formData.append('id_shift', number);

    try{
        await $authHost.post('api/reservation/addition', formData,{
        headers:{
            'Content-Type': 'multipart/form-data',
        }
        }) 
        getApp()
    } catch(error){
        console.error('ошибка:', error)
    }}
console.log(handleSubmit);

  return (
        <div className="SharedContainer">
        <button onClick={test}>Назад</button>
        <div className="Container__box">
        
        <form className="form" onSubmit={handleSubmit}>
            <p>Создание формы</p>
        <div className="form__box-text">
            <label htmlFor="fio">Ф.И.О:</label>
            <input className="title"
                type="text"
                id="fio"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <label  className="label__des" htmlFor="email">Email:</label>
            <input className="title"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label  className="label__des" htmlFor="phone">Телефон:</label>
            <input className="title"
                type="tel"
                id="phone" 
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required/>
            <label className="label__des" htmlFor="quantity">Кол-во мест:</label>
                <input className="number"
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                /> 
            <label className="label__des" htmlFor="id_shift">id_shift:</label>
                <input className="number"
                    type="number"
                    id="id_shift"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
        </div>
            
            <button className="form__submit" type="submit">Добавить</button>
        </form>
            <button className="Btm" onClick={getApp}>Получить</button>
            <div className="Card__container">
                {date.map((el) =>(
                    <div className="Card__box">
                    <h1>id: {el.id_reservation}</h1>
                    <h2>id_shift: {el.id_shift}</h2>
                    <p>Ф.И.О: {el.fio}</p>
                    <p>Почта: {el.email}</p>
                    <p>Телефон: {el.phone}</p>
                    <p>Кол-во мест: {el.quantity}</p>
                        <div>
                        <button onClick={()=> openModal(el.id_reservation, open.isModal)} className="Btm">Обновить</button>
                        {
                            open.isModal && el.id_reservation === open.id 
                            ? <Modal type='reservation' get={getApp} open={open} back={setOpen} title='название' description='описание'/>
                            : 
                            null
                        }
                        <button className="Btm-left" onClick={()=>deleteApp(el.id_reservation)}>Удалить</button>
                        </div>             
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Reservation