import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/const";
import {$authHost , $host} from '../http/index'
import '../styles/generalPages.css'
import Modal from "../component/Modal";

function Photo() {
    const [date, setDate] = useState([])
    const [open, setOpen] = useState({id:'', isModal:false})
    const [file, setFile] = useState(null);
    const [number, setNumber] = useState('')
  
    const test = () =>{
        history(ADMIN_ROUTE)
    }

    const history = useNavigate()

    const openModal = (ids, modOP) =>{
        setOpen({id:ids, isModal: !modOP})
    }

    const getApp = async () =>{ 
        const res = await $host.get('api/photo/receiv')
        setDate(res.data)
    }

    const deleteApp = async (id) =>{
        await $authHost.delete(`api/photo/del/${id}`)
        getApp()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id_type', number);
        formData.append('link_photo', file);

    try{
        await $authHost.post('api/photo/addition', formData,{
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
            <label htmlFor="link_photo">Фотография:</label>
            <input
                type="file"
                id="link_photo"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
        </div>
        <div className="form__box-text">
            <label className="label__des" htmlFor="id_type">id_type:</label>
                <input className="number"
                    type="number"
                    id="id_type"
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
                    <h1>id:{el.id_photo}</h1>
                    <h2>id_type:{el.id_type}</h2>
                    <img src={`http://localhost:3000/` + el.link_photo} className="img" alt="1"/>
                        <div>
                        <button onClick={()=> openModal(el.id_photo, open.isModal)} className="Btm">Обновить</button>
                        {
                            open.isModal && el.id_photo === open.id 
                            ? <Modal type='photo' get={getApp} open={open} back={setOpen} title='название' description='описание'/>
                            : 
                            null
                        }
                        <button className="Btm-left" onClick={()=>deleteApp(el.id_photo)}>Удалить</button>
                        </div>             
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Photo