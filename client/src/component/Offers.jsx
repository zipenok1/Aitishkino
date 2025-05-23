import React, { useState } from "react";
import { $host } from '../http/index';

function Offers() {

  const [offer, setOffer] = useState('');
  const [name, setName] = useState('')
    
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!name) {
      alert('Введите имя.');
      return;
    }
    if (!offer) {
        alert('Введите вопрос.');
        return;
    }
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', offer)
      const newsletPost = await $host.post('/api/offers/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      if (newsletPost.data) {
        alert('Ваш вопрос отправлен')
        setName('')
        setOffer('')
      } 
    } catch (error) {
      console.error('Ошибка:', error)
      alert('Произошла ошибка при отправки.')
    }
  };

  return (
    <div className="question__content wrap">
          <div className="question__content-title">
            <h3>Хотите задать вопрос организатору ?</h3>
            <p>Мы рассмотрим ваше предложение!</p>
          </div>
            <div className='question__content-box'>
              <form className='question__content-from' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Ваше имя'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className='input-height'
                    type="text"
                    placeholder='Ваш вопрос'
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    required
                />
                <input
                    className='question-form-button'
                    type="submit"
                    value='Отправить'/>
              </form>
          </div>
          <img className="question__content-icon" src="imges/icon/offersIcon.svg" alt="offersIcon"/>
    </div>
  );
}

export default Offers;