import React from 'react'
import { Link } from "react-router-dom";
import {EVENT_ROUTE, PROGRAM_ROUTE, NEWS_ROUTE, PARTNERS_ROUTE, PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, SHIFTS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE, NEWSLETTER_ROUTE} from "../utils/const"

import '../styles/admin/menuAdmin.css'

function MenuAdmin() {
  return (
    <div className='menuAdmin'>
        <div className="menuAdmin__content"> 
            <p>Разделы</p>
                <Link to={PHOTO_ROUTE}>
                    <button>Фотографии для главной</button>
                </Link>
                
                <Link to={TYPE_ROUTE}>
                    <button>Типы фото для главной</button>
                </Link>

                <Link to={PARTNERS_ROUTE}>
                    <button>Партнеры</button>
                </Link>

                <Link to={TEACHERS_ROUTE}>
                    <button>Учителя</button>
                </Link>

                <Link to={SHIFTS_ROUTE}>
                    <button>Смены</button>
                </Link>

                <Link to={PROGRAM_ROUTE}>
                    <button>Программа</button>
                </Link>

                <Link to={REVIEWS_ROUTE}>
                    <button>Отзывы</button>
                </Link>

                <Link to={EVENT_ROUTE}>
                    <button>Мероприятия</button>
                </Link>

                <Link to={NEWS_ROUTE}>
                        <button>Новости</button>
                </Link>

                <Link to={RESERVATION_ROUTE}>
                    <button>Бронь</button>
                </Link>

                <Link to={NEWSLETTER_ROUTE}>
                    <button>Рассылка</button>
                </Link>
        </div>           
    </div>
  )
}

export default MenuAdmin