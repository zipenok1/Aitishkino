import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/const";
import {$authHost , $host} from '../http/index'
import '../styles/generalPages.css'
import Modal from "../component/Modal";

function Event() {

  const [date, setDate] = useState([])
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState({id:'', isModal:false})
  
  const test = () => history(ADMIN_ROUTE)


  const history = useNavigate()

  const openModal = (ids, modOP) =>{
    setOpen({id:ids, isModal: !modOP})
  }

  const getApp = async () =>{ 
    const res = await $host.get('api/events/receiving')
    setDate(res.data)
  }

  const deleteApp = async (id) =>{
    await $authHost.delete(`api/events/deletion/${id}`)
    getApp()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', text);
    formData.append('description', description);
    formData.append('link_img', file);

  try{
    await $authHost.post('api/events/addition', formData,{
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
            <label htmlFor="title">Название:</label>
            <input className="title"
                type="text"
                id="title"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <label className="label__des" htmlFor="description">Описание:</label>
            <input className="description"
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
        </div>
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

                      <div className="Card__box-text">
                        <h1>id:{el.id_events}</h1> 
                        <p>название: {el.title}</p>
                        <p>описание: {el.description}</p>
                      </div>
                      
                    <img src={`http://localhost:3000/` + el.link_img} className="img" alt="1"/>
                        <div>
                        <button onClick={()=> {openModal(el.id_events, open.isModal); document.body.style.overflow='hidden'}} className="Btm">Обновить</button>
                        {
                            open.isModal && el.id_events === open.id 
                            ? <Modal type='event' get={getApp} open={open} back={setOpen} title='название' description='описание'/>                           
                            : 
                            null
                        }
                        <button className="Btm-left" onClick={()=>deleteApp(el.id_events)}>Удалить</button>
                        </div>             
                    </div>
                ))} 
            </div>
        </div>
</div>
  )
}

export default Event