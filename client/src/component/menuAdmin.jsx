import React from 'react'
import { Link } from "react-router-dom";
import '../styles/admin/menuAdmin.css'
import {SCHEDULE_ROUTE, QUESTIONSE_ROUTE, DAYSCHEDULE_ROUTE, SECTIONS_ROUTE, OFFERS_ROUTE, EVENT_ROUTE, PROGRAM_ROUTE, NEWS_ROUTE, PARTNERS_ROUTE, PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, SHIFTS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE, NEWSLETTER_ROUTE} from "../utils/const"

function MenuAdmin() {
  return (
    <div className='menuAdmin'>
        <div className="menuAdmin__content"> 
            <p>Разделы</p>

                <Link to={PHOTO_ROUTE}>
                    <button>Общие фотографии</button>
                </Link>
                
                <Link to={TYPE_ROUTE}>
                    <button>Секции фотографий</button>
                </Link>

                <Link to={PARTNERS_ROUTE}>
                    <button>Секция партнеры</button>
                </Link>

                <Link to={TEACHERS_ROUTE}>
                    <button>Секция команда</button>
                </Link>

                <Link to={SHIFTS_ROUTE}>
                    <button>Секция смены</button>
                </Link>

                <Link to={PROGRAM_ROUTE}>
                    <button>Секция программа</button>
                </Link>

                <Link to={REVIEWS_ROUTE}>
                    <button>Секция отзывы</button>
                </Link>

                <Link to={EVENT_ROUTE}>
                    <button>Секция каникулы</button>
                </Link>

                <Link to={NEWS_ROUTE}>
                        <button>Секция новости</button>
                </Link>

                <Link to={SCHEDULE_ROUTE}>
                    <button>Секция расписание</button>
                </Link>

                <Link to={DAYSCHEDULE_ROUTE}>
                    <button>Дни недель</button>
                </Link>

                <Link to={RESERVATION_ROUTE}>
                    <button>Забронированные</button>
                </Link>

                <Link to={OFFERS_ROUTE}>
                    <button>Вопросы организатору</button>
                </Link>

                <Link to={QUESTIONSE_ROUTE}>
                    <button>Задаваемые вопросы</button>
                </Link>

                <Link to={SECTIONS_ROUTE}>
                    <button>Общие секции</button>
                </Link>

                <Link to={NEWSLETTER_ROUTE}>
                    <button>Подписка</button>
                </Link>

        </div>           
    </div>
  )
}

export default MenuAdmin