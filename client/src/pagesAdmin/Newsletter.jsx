import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/const";
import {$authHost , $host} from '../http/index'
import '../styles/generalPages.css'
import Modal from "../component/Modal";

function Newsletter() {

    const [date, setDate] = useState([])
    const [text, setText] = useState('');
    const [open, setOpen] = useState({id:'', isModal:false})
  
    const test = () =>{
        history(ADMIN_ROUTE)
    }

    const history = useNavigate()

    const openModal = (ids, modOP) =>{
        setOpen({id:ids, isModal: !modOP})
    }

    const getApp = async () =>{ 
        const res = await $host.get('api/newsletter/withdraw')
        setDate(res.data)
    }

    const deleteApp = async (id) =>{
        await $authHost.delete(`api/newsletter/deletion/${id}`)
        getApp()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', text);

    try{
        await $authHost.post('api/newsletter/append', formData,{
        headers:{
            'Content-Type': 'multipart/form-data',
        }
        }) 
        getApp()
    } catch(error){
        console.error('ошибка:', error)
    }}

    

  return (
    <div className="SharedContainer">
        <button onClick={test}>Назад</button>
        <div className="Container__box">
          
        <form className="form" onSubmit={handleSubmit}>
            <p>Создание формы</p>
        <div className="form__box-text">
            <label htmlFor="email">Email:</label>
            <input className="title"
                type="email"
                id="email"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />      
        </div>
            <button className="form__submit" type="submit">Добавить</button>
        </form>
            <button className="Btm" onClick={getApp}>Получить</button>
            <div className="Card__container">
                {date.map((el) =>(
                    <div className="Card__box">
                    <h1>id:{el.id_newsletter}</h1> 
                    <p>почта: {el.email}</p>
                        <div>
                        <button onClick={()=> openModal(el.id_newsletter, open.isModal)} className="Btm">Обновить</button>
                        {
                            open.isModal && el.id_newsletter === open.id 
                            ?  <Modal type='newsletter' get={getApp} open={open} back={setOpen} title='название' description='описание'/>
                            : 
                            null
                        }
                        <button className="Btm-left" onClick={()=>deleteApp(el.id_newsletter)}>Удалить</button>
                        </div>             
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Newsletter