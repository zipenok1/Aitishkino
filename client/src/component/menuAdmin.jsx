import React from 'react';
import { Link } from "react-router-dom";
import '../styles/admin/menuAdmin.css';
import {
  SCHEDULE_ROUTE, QUESTIONSE_ROUTE, DAYSCHEDULE_ROUTE, 
  SECTIONS_ROUTE, OFFERS_ROUTE, EVENT_ROUTE, 
  PROGRAM_ROUTE, NEWS_ROUTE, PARTNERS_ROUTE, 
  PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, 
  SHIFTS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE, NEWSLETTER_ROUTE
} from "../utils/const";

function MenuAdmin() {
  return (
    <div className='menuAdmin'>
      <div className="menuAdmin__content"> 
        <div className="menu-header">
          <h3>Админ панель</h3>
          <div className="line"></div>
        </div>

        <div className="menu-section">
          <p className="section-title">Коммуникация</p>
          <div className="menu-items">
            <Link to={RESERVATION_ROUTE} className="menu-link">
              Бронирование
            </Link>

            <Link to={OFFERS_ROUTE} className="menu-link">
              Вопросы организатору
            </Link>

            <Link to={NEWSLETTER_ROUTE} className="menu-link">
              Подписка
            </Link>
          </div>
        </div>

        <div className="menu-section">
          <p className="section-title">Контент</p>
          <div className="menu-items">
            <Link to={PHOTO_ROUTE} className="menu-link">
              Общие фотографии
            </Link>
            
            <Link to={TYPE_ROUTE} className="menu-link">
              Секции фотографий
            </Link>

            <Link to={SECTIONS_ROUTE} className="menu-link">
              Общие секции
            </Link>

            <Link to={PARTNERS_ROUTE} className="menu-link">
              Партнеры
            </Link>

            <Link to={TEACHERS_ROUTE} className="menu-link">
              Команда
            </Link>

            <Link to={REVIEWS_ROUTE} className="menu-link">
              Отзывы
            </Link>
            
            <Link to={NEWS_ROUTE} className="menu-link">
              Новости
            </Link>
          </div>
        </div>

        <div className="menu-section">
          <p className="section-title">Программы</p>
          <div className="menu-items">
            <Link to={SHIFTS_ROUTE} className="menu-link">
              Смены
            </Link>

            <Link to={PROGRAM_ROUTE} className="menu-link">
              Программы
            </Link>

            <Link to={QUESTIONSE_ROUTE} className="menu-link">
              Частые вопросы
            </Link>

            <Link to={EVENT_ROUTE} className="menu-link">
              Секция карточек
            </Link>
          </div>
        </div>

        <div className="menu-section">
          <p className="section-title">Расписание</p>
          <div className="menu-items">
            <Link to={DAYSCHEDULE_ROUTE} className="menu-link">
              Дни недели
            </Link>

            <Link to={SCHEDULE_ROUTE} className="menu-link">
              Расписание
            </Link>
          </div>
        </div>
      </div>           
    </div>
  );
}

export default MenuAdmin;