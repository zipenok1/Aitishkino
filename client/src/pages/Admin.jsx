import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/admin.css'
import axios from "axios"


function Admin() {

  const [date, setDate] = useState([])
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState({id:'', isModal:false})
  const [modText, setModText] = useState('');
  const [modDescription, setModDescription] = useState('');
  const [modFile, setModFile] = useState(null); 

  const openModal = (ids, modOP) =>{
    setOpen({id:ids, isModal: !modOP})
  }

  const getApp = async () =>{ 
    const res = await axios.get('http://localhost:3000/api/events/receiving')
    setDate(res.data)
  }

  const deleteApp = async (id) =>{
    await axios.delete(`http://localhost:3000/api/events/deletion/${id}`)
    getApp()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', text);
    formData.append('description', description);
    formData.append('link_img', file);

  try{
    await axios.post('http://localhost:3000/api/events/addition', formData,{
      headers:{
         'Content-Type': 'multipart/form-data',
      }
    }) 
  } catch(error){
    console.error('ошибка:', error)
  }}

  const modelSubmit = async (e) => {
    console.log(modText,modDescription,modFile);
    e.preventDefault();
    const modelData = new FormData();
    modelData.append('title', modText);
    modelData.append('description', modDescription);
    modelData.append('link_img', modFile);

  try{
    await axios.put(`http://localhost:3000/api/events/editing/${open.id}`, modelData,{
      headers:{
         'Content-Type': 'multipart/form-data',
      }
    }) 
    getApp()
  } catch(error){
    console.error('ошибка:', error)
  }}
   
return (
<div className="Admin">
  <Link to={'/'}>
      <button>Назад</button>
  </Link>
      <div className="Admin__box">

      <form onSubmit={handleSubmit}>
      <div className="form__box-text">
        <label htmlFor="title">Text:</label>
          <input
            type="text"
            id="title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        <label className="label__des" htmlFor="description">description:</label>
          <input
            type="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
      </div>
      <div className="form__box-file">
        <label htmlFor="link_img">link_img:</label>
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
          <div className="event">
            {date.map((el) =>(
                <div className="event__box">
                  <h1>id:{el.id_events}</h1> 
                  <p>название: {el.title}</p>
                  <p>описание: {el.description}</p>
                  <img src={`http://localhost:3000/` + el.link_img} className="img" alt="1"/>
                    <div>
                      <button onClick={()=> openModal(el.id_events, open.isModal)} className="Btm">Обновить</button>
                      {
                        open.isModal && el.id_events === open.id 
                        ? 
                        <div>
                          <form onSubmit={modelSubmit}>
                            <div className="form__box-text">
                              <label htmlFor="title">Text:</label>
                                <input
                                  type="text"
                                  id="title"
                                  value={modText}
                                  onChange={(e)=>setModText(e.target.value)}
                                  required
                                />
                              <label className="label__des" htmlFor="description">description:</label>
                                <input
                                  type="description"
                                  id="description"
                                  value={modDescription}
                                  onChange={(e)=>setModDescription(e.target.value)}
                                  required
                                />
                            </div>
                            <div className="form__box-file">
                              <label htmlFor="link_img">link_img:</label>
                                <input
                                  type="file"
                                  id="link_img"
                                  onChange={(e)=>setModFile(e.target.files[0])}
                                
                                />
                            </div>
                            <button type="submit">Применить</button>
                          </form>
                        </div> 
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
  );
}

export default Admin;