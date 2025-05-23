import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {PUBLIC_ROUTE, SHIFTSPAGE_ROUTE, INFORMATION_ROUTE, NEWSPAGE_ROUTE, POLITICS_ROUTER} from "../utils/const";
import {observer} from 'mobx-react-lite'
import {Context} from "..";
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
                        <div className="social-box">
                            <a href="https://vk.com/itishkino"><img src="imges/icon/vk2.svg" alt="vk" /></a>
                            <a href=""><img src="imges/icon/telega.svg" alt="telega" /></a>
                        </div>
                         <p>© 2025, «Айтишкино»<br />
                         Все права защищены</p>
                    </div>
                    <div className='footer__content-sections'>
                        <h3>Страницы</h3>
                        <nav>
                            <ul>
                                <Link to={PUBLIC_ROUTE}>
                                    Главная
                                </Link> 
                                <Link to={SHIFTSPAGE_ROUTE}>
                                    Программа смен
                                </Link>
                                <Link to={INFORMATION_ROUTE}>
                                    Информация
                                </Link>
                                <Link to={NEWSPAGE_ROUTE}>
                                    Мероприятия
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__content-documents">
                        <h3>Документы</h3>
                        <ul>
                            <li><Link to={POLITICS_ROUTER}>Политика обработки персональных данных</Link></li>
                        </ul>
                    </div>
                </div>
        }
    </div>  
)})

export default Footer