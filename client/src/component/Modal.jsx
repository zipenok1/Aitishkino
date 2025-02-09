import React, {useState} from 'react'
import {$authHost} from '../http/index'
import '../styles/modal.css'

function Modal({get,type,open,back,title,description}) {

    const [modText, setModText] = useState('');
    const [modDescription, setModDescription] = useState('');
    const [modFile, setModFile] = useState(null); 
    const [modEmail, setModEmail] = useState('');
    const [modNumber, setModNumber] = useState('');
    const [modTel, setModTel] = useState('');
    const [modQuantity, setModQuantity] = useState('');

    const modelSubmit = async (e) => {
        e.preventDefault();
        const modelData = new FormData();
        if(type == 'event'){
          modelData.append('title', modText);
          modelData.append('description', modDescription);
          modelData.append('link_img', modFile);
        }
        if(type == 'newsletter') {
          modelData.append('email', modEmail);
        }
        if(type == 'partners'){
          modelData.append('link_img', modFile);
        }
        if(type == 'photo'){
          modelData.append('id_type', modNumber);
          modelData.append('link_photo', modFile);
        }
        if(type == 'reservation'){
          modelData.append('fio', modText);
          modelData.append('email', modEmail);
          modelData.append('phone', modTel);
          modelData.append('quantity', modQuantity);
          modelData.append('id_shift', modNumber);
        }
        if(type == 'reviews'){
          modelData.append('fio', modText);
          modelData.append('review', modDescription);
          modelData.append('link_img', modFile);
        }
      try{
        if(type == 'event'){
          await $authHost.put(`api/events/editing/${open.id}`, modelData,{
            headers:{
               'Content-Type': 'multipart/form-data',
            }
          }) 
        }
        if(type == 'newsletter'){
          await $authHost.put(`api/newsletter/editing/${open.id}`, modelData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
          }) 
        }
        if(type == 'partners'){
          await $authHost.put(`api/partners/editing/${open.id}`, modelData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
          })
        }
        if(type == 'photo'){
          await $authHost.put(`api/photo/editing/${open.id}`, modelData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
          })
        }
        if(type == 'reservation'){
          await $authHost.put(`api/reservation/editing/${open.id}`, modelData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
          })
        }
        if(type == 'reviews'){
          await $authHost.put(`api/reviews/editing/${open.id}`, modelData,{
            headers:{
                'Content-Type': 'multipart/form-data',
            }
          })
        }
        get()
      } catch(error){
        console.error('ошибка:', error)
      }}

  return (
    <div>
       {type == 'event' ? 
            <div className='mada'>
            <form className="modalform" onSubmit={modelSubmit}>
                <div className='modal-title'>
                    <p>Обновить запись</p>
                    <button onClick={()=>{back(false);document.body.style.overflow='auto'}}>закрыть</button>   
                </div>
                
                <div className="form__box-text">
                <label htmlFor="title">{title}:</label>
                    <input className="title"
                    type="text"
                    id="title"
                    value={modText}
                    onChange={(e)=>setModText(e.target.value)}
                    required
                    />
                <label className="label__des" htmlFor="description">{description}:</label>
                    <input className="description"
                    type="text"
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
                <button className="form__submit" type="submit">Применить</button>
            </form>
            </div> 
            : 
            type == 'newsletter' ?
            <div className='mada'>
              <form className="modalform" onSubmit={modelSubmit}>
                <div className='modal-title'>
                    <p>Обновить запись</p>
                    <button onClick={()=>{back(false);document.body.style.overflow='auto'}}>закрыть</button>   
                </div>
                
                <div className="form__box-text">
                <label htmlFor="email">{title}:</label>
                    <input className="title"
                    type="email"
                    id="email"
                    value={modEmail}
                    onChange={(e)=>setModEmail(e.target.value)}
                    required
                    />
                </div>

                <button className="form__submit" type="submit">Применить</button>
            </form>
            </div>
            :
            type == 'partners' ?
            <div className='mada'>
              <form className="modalform" onSubmit={modelSubmit}>
                <div className='modal-title'>
                    <p>Обновить запись</p>
                    <button onClick={()=>{back(false);document.body.style.overflow='auto'}}>закрыть</button>   
                </div>
                
                <div className="form__box-file">
                  <label htmlFor="link_img">Фотография:</label>
                    <input
                    type="file"
                    id="link_img"
                    onChange={(e)=>setModFile(e.target.files[0])}
                    />
                </div>
                <button className="form__submit" type="submit">Применить</button>
            </form>

            </div>
            :
            type == 'photo' ?
            <div className='mada'>
              <form className="modalform" onSubmit={modelSubmit}>
                <div className='modal-title'>
                    <p>Обновить запись</p>
                    <button onClick={()=>{back(false);document.body.style.overflow='auto'}}>закрыть</button>   
                </div>
                
                <div className="form__box-file">
                  <label htmlFor="link_photo">Фотография:</label>
                    <input
                    type="file"
                    id="link_photo"
                    onChange={(e)=>setModFile(e.target.files[0])}
                    />
                </div>
                <div className='form__box-text'>
                  <label className="label__des" htmlFor="id_type">id_type:</label>
                      <input className="number"
                          type="number"
                          id="id_type"
                          value={modNumber}
                          onChange={(e) => setModNumber(e.target.value)}
                          required
                      />
                </div>
                <button className="form__submit" type="submit">Применить</button>
            </form>
            </div>
            :
            type == 'reservation' ?
            <div className='mada'>
              <form className="modalform" onSubmit={modelSubmit}>
                <div className='modal-title'>
                    <p>Обновить запись</p>
                    <button onClick={()=>{back(false);document.body.style.overflow='auto'}}>закрыть</button>   
                </div>
                
                <div className="form__box-text">
                  <label htmlFor="fio">Ф.И.О:</label>
                    <input className="title"
                        type="text"
                        id="fio"
                        value={modText}
                        onChange={(e) => setModText(e.target.value)}
                        required
                    />
                  <label  className="label__des" htmlFor="email">Email:</label>
                    <input className="title"
                        type="email"
                        id="email"
                        value={modEmail}
                        onChange={(e) => setModEmail(e.target.value)}
                        required
                    />
                  <label  className="label__des" htmlFor="phone">Телефон:</label>
                    <input className="title"
                        type="tel"
                        id="phone" 
                        value={modTel}
                        onChange={(e) => setModTel(e.target.value)}
                        required/>
                  <label className="label__des" htmlFor="quantity">Кол-во мест:</label>
                        <input className="number"
                            type="number"
                            id="quantity"
                            value={modQuantity}
                            onChange={(e) => setModQuantity(e.target.value)}
                            required
                        /> 
                  <label className="label__des" htmlFor="id_shift">id_shift:</label>
                        <input className="number"
                            type="number"
                            id="id_shift"
                            value={modNumber}
                            onChange={(e) => setModNumber(e.target.value)}
                            required
                        />
                </div>
                <button className="form__submit" type="submit">Применить</button>
            </form>
            </div>
            :
            type == 'reviews' ?  
            <div className='mada'>
            <form className="modalform" onSubmit={modelSubmit}>
                <div className='modal-title'>
                    <p>Обновить запись</p>
                    <button onClick={()=>{back(false);document.body.style.overflow='auto'}}>закрыть</button>   
                </div>
                
                <div className="form__box-text">
                <label htmlFor="fio">{title}:</label>
                    <input className="title"
                      type="text"
                      id="fio"
                      value={modText}
                      onChange={(e)=>setModText(e.target.value)}
                      required
                    />
                <label className="label__des" htmlFor="review">{description}:</label>
                    <input className="description"
                      type="text"
                      id="review"
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
                <button className="form__submit" type="submit">Применить</button>
            </form>
            </div> 
            :
            null
        }
    </div>
    )
}

export default Modal