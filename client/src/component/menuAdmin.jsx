import React from 'react'
import { Link } from "react-router-dom";
import {SCHEDULE_ROUTE, QUESTIONSE_ROUTE, DAYSCHEDULE_ROUTE, SECTIONS_ROUTE, OFFERS_ROUTE, EVENT_ROUTE, PROGRAM_ROUTE, NEWS_ROUTE, PARTNERS_ROUTE, PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, SHIFTS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE, NEWSLETTER_ROUTE} from "../utils/const"

import '../styles/admin/menuAdmin.css'

function MenuAdmin() {
  return (
    <div className='menuAdmin'>
        <div className="menuAdmin__content"> 
            <p>Разделы</p>
                <Link to={PHOTO_ROUTE}>
                    <button>Фотографии</button>
                </Link>
                
                <Link to={TYPE_ROUTE}>
                    <button>Связи фотографий</button>
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

                <Link to={OFFERS_ROUTE}>
                    <button>Вопросы</button>
                </Link>

                <Link to={SCHEDULE_ROUTE}>
                    <button>Расписание</button>
                </Link>

                <Link to={QUESTIONSE_ROUTE}>
                    <button>Часто задаваемые вопросы</button>
                </Link>

                <Link to={DAYSCHEDULE_ROUTE}>
                    <button>Дни недель</button>
                </Link>

                <Link to={SECTIONS_ROUTE}>
                    <button>Секции</button>
                </Link>

                <Link to={NEWSLETTER_ROUTE}>
                    <button>Рассылка</button>
                </Link>
        </div>           
    </div>
  )
}

export default MenuAdmin