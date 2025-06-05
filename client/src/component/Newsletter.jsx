import React, { useState } from "react";
import { $host } from '../http/index';
import { POLITICS_ROUTER } from "../utils/const";
import { Link } from "react-router-dom";
import '../styles/component/newsletter.css';

function Newsletter() {

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!email) {
      alert('Введите почту.');
      return;
    }
    try {
      const formData = new FormData()
      formData.append('email', email)
      const newsletPost = await $host.post('/api/newsletter/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      if (newsletPost.data) {
        alert('Вы успешно подписались на рассылку!')
        setEmail('')
      } 
    } catch (error) {
      console.error('Ошибка:', error)
      alert('Произошла ошибка при подписке на рассылку.')
    }
  };

  return (
    <div className='newsletter'>
      <div className="newsletter__content">
        <div className='newsletter__content-title'>
          <h3>Хотите узнавать о новостях профориентационного проекта первыми?</h3>
          <p>Подпишитесь на рассылку!</p>
        </div>
        <div className='newsletter__content-box'>
          <form className='newsletter__box-from' onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder='Ваш e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="submit" value='Подписаться' />
          </form>
          <div className="newsletter__box-text">
            <Link 
              to={POLITICS_ROUTER}
            >
              Нажимая на кнопку "Подписаться" вы соглашаетесь с политикой конфиденциальности
            </Link>
          </div>
        </div>
        <img className="newsletter__content-icon" src="imges/icon/newsletterIcon.svg" alt="newsletterIcon" />
      </div>
    </div>
  );
}

export default Newsletter;