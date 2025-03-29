import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, PUBLIC_ROUTE,SHIFTSPAGE_ROUTE, INFORMATION_ROUTE, NEWSPAGE_ROUTE } from "../utils/const";
import {observer} from 'mobx-react-lite'
import { Context } from "..";
import '../styles/component/footer.css'


const Footer = observer(() => {

    const {user} = useContext(Context)

  return (
    <div className='footer'>
        { user.isAuth ?
                null
                :
                <div className="footer__content wrap">
                    <div className='footer__content-logo'>
                        <img src="imges/logo.svg" alt="logo" />
                        <a href="https://vk.com/itishkino"><img src="imges/icon/vk2.png" alt="vk" /></a> 
                    </div>
                    <div className='footer__content-sections'>
                        <h3>Страницы</h3>
                        <nav>
                            <ul>
                                <Link to={LOGIN_ROUTE}>
                                    Авторизация
                                </Link>
                                <Link to={PUBLIC_ROUTE}>
                                    Главная
                                </Link> 
                                <Link to={SHIFTSPAGE_ROUTE}>
                                    программа смен
                                </Link>
                                <Link to={INFORMATION_ROUTE}>
                                    информация
                                </Link>
                                <Link to={NEWSPAGE_ROUTE}>
                                    Новости
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__content-documents">
                        <h3>Документы</h3>
                        <ul>
                            <li>Политика конфиденциальности </li>
                            <li>Согласие на обработку персональных данных</li>
                        </ul>
                    </div>
                </div>
        }
    </div>  
)})

export default Footer