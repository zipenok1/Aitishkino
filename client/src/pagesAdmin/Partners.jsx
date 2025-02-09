import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/const";
import {$authHost , $host} from '../http/index'
import '../styles/generalPages.css'
import Modal from "../component/Modal";

function Partners() {

    const [date, setDate] = useState([])
    const [open, setOpen] = useState({id:'', isModal:false})
    const [file, setFile] = useState(null);
  
    const test = () =>{
        history(ADMIN_ROUTE)
    }

    const history = useNavigate()

    const openModal = (ids, modOP) =>{
        setOpen({id:ids, isModal: !modOP})
    }

    const getApp = async () =>{ 
        const res = await $host.get('api/partners/obtain')
        setDate(res.data)
    }

    const deleteApp = async (id) =>{
        await $authHost.delete(`api/partners/deletion/${id}`)
        getApp()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('link_img', file);

    try{
        await $authHost.post('api/partners/adder', formData,{
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
        <div className="form__box-file">
            <label htmlFor="link_img">Фотография:</label>
            <input
                type="file"
                id="link_img"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
        </div>
            <button className="form__submit" type="submit">Добавить</button>
        </form>
            <button className="Btm" onClick={getApp}>Получить</button>
            <div className="Card__container">
                {date.map((el) =>(
                    <div className="Card__box">
                    <h1>id:{el.id_partners}</h1>
                    <img src={`http://localhost:3000/` + el.link_img} className="img" alt="1"/>
                        <div>
                        <button onClick={()=> openModal(el.id_partners, open.isModal)} className="Btm">Обновить</button>
                        {
                            open.isModal && el.id_partners === open.id 
                            ? <Modal type='partners' get={getApp} open={open} back={setOpen} title='название' description='описание'/>
                            : 
                            null
                        }
                        <button className="Btm-left" onClick={()=>deleteApp(el.id_partners)}>Удалить</button>
                        </div>             
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Partners