import React, { useContext } from "react";
import { Context } from "..";
import '../styles/navbar.css'
import { Link } from "react-router-dom";
import { EVENT_ROUTE, LOGIN_ROUTE, NEWSLETTER_ROUTE, PARTNERS_ROUTE, PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, SHIFT_ROUTE, SHIFTS_ROUTE, SOCIAL_ROUTE, STATISTICS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE } from "../utils/const";
import {observer} from 'mobx-react-lite'

const NavBar = observer(()=> {

    const {user} = useContext(Context)

  return (
    <div className="NavBar">
    { user.isAuth ?
        <div className="navbar_box-admin">
            <div className="wrap">
                <div className="navbar-flex"> 
                    <Link to={EVENT_ROUTE}>
                        <button>События</button>
                    </Link>

                    <Link to={NEWSLETTER_ROUTE}>
                        <button>Рассылка</button>
                    </Link>

                    <Link to={PARTNERS_ROUTE}>
                        <button>Партнеры</button>
                    </Link>

                    <Link to={PHOTO_ROUTE}>
                        <button>Фотографии</button>
                    </Link>

                    <Link to={RESERVATION_ROUTE}>
                        <button>Бронирование</button>
                    </Link>

                    <Link to={REVIEWS_ROUTE}>
                        <button>Отзывы</button>
                    </Link>

                    <Link to={SHIFT_ROUTE}>
                        <button>Смена</button>
                    </Link>

                    <Link to={SHIFTS_ROUTE}>
                        <button>Смены</button>
                    </Link>

                    <Link to={SOCIAL_ROUTE}>
                        <button>Социальные сети</button>
                    </Link>

                    <Link to={STATISTICS_ROUTE}>
                        <button>Статистика</button>
                    </Link>

                    <Link to={TEACHERS_ROUTE}>
                        <button>Учителя</button>
                    </Link>

                    <Link to={TYPE_ROUTE}>
                        <button>Типы</button>
                    </Link>
                </div>               
            </div>          
        </div> 
        :
        <div className="navbar_box-user">
            <div className="wrap">
                <div className="navbar-flex">
                    <Link to={LOGIN_ROUTE}>
                        <button>Авторизация</button>
                    </Link>
                </div>  
            </div>           
        </div> 
    }
    </div>
    
  );
})

export default NavBar;
