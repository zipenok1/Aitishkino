import React, { useContext, useState } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTE, SHIFTSPAGE_ROUTE, INFORMATION_ROUTE, NEWSPAGE_ROUTE } from "../utils/const";
import {observer} from 'mobx-react-lite'
import '../styles/navbar/navbar.css'

const NavBar = observer(()=> {

    const {user} = useContext(Context)

    const [open, setOpen] = useState(false)

    const openNav = () => {
        setOpen(!open)
    }

    const test = () =>{
        user.setIsAuth(false)
        localStorage.removeItem('token')
        history(PUBLIC_ROUTE)
    }
    const history = useNavigate()

  return (
    <div className="NavBar">
    { user.isAuth ?
        <div className="navbar_box-admin">
            <div className="wraper">
                <div className="navbar-flex">
                        <button>Панель администратора</button>
                    <div>
                        <button onClick={test}>Выйти</button> 
                    </div>
                </div>   
            </div>          
        </div> 
        :
        <div className="navbar_box-user">
            <div className="wrap">
                <div className="navbar-flex">
                    <Link to={PUBLIC_ROUTE}>
                        <img src="/imges/logo.svg" alt="1" />
                    </Link>

                    <div class="header__burger" >
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
                        <label for="burger-checkbox" className="burger" onClick={openNav}></label>
                    </div>  
                    { open 
                        ? 
                        <div className="activ">
                            <Link to={PUBLIC_ROUTE}>
                                <button>Главная</button>
                            </Link>  
                            <Link to={SHIFTSPAGE_ROUTE}>
                                <button>Программа смен</button>
                            </Link>
                            <Link to={INFORMATION_ROUTE}>
                                <button>Информация</button>
                            </Link>
                            <Link to={NEWSPAGE_ROUTE}>
                                <button>Новости</button>
                            </Link>
                        </div> 
                        : 
                        null
                    }
                    <div className="navnar-page">
                        <Link to={PUBLIC_ROUTE}>
                            <button>Главная</button>
                        </Link>  
                        <Link to={SHIFTSPAGE_ROUTE}>
                            <button>Программа смен</button>
                        </Link>
                        <Link to={INFORMATION_ROUTE}>
                            <button>Информация</button>
                        </Link>
                        <Link to={NEWSPAGE_ROUTE}>
                            <button>Новости</button>
                        </Link>
                    </div>                    
                </div>  
            </div>           
        </div> 
    }
    </div> 
  );
})

export default NavBar;
