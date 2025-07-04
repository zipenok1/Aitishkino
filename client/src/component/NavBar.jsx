import React, {useContext, useState, useEffect} from "react";
import {Context} from "..";
import {Link, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {PUBLIC_ROUTE, SHIFTSPAGE_ROUTE, INFORMATION_ROUTE, NEWSPAGE_ROUTE} from "../utils/const";
import {observer} from 'mobx-react-lite'
import '../styles/navbar/navbar.css'

const NavBar = observer(()=> { 

    const {user} = useContext(Context)

    const [open, setOpen] = useState(false)

    const openNav = () => {
        setOpen(!open)
    }

    const exit = () =>{
        user.setIsAuth(false)
        localStorage.removeItem('token')
        history(PUBLIC_ROUTE)
    }
    const history = useNavigate()

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <div className="NavBar">
    { user.isAuth ?
        <div className="navbar_box-admin">
            <div className="wraper">
                <div className="navbar__admin-flex">
                        <img src="/imges/logo.svg" alt="logo" />
                    <div>
                        <button onClick={exit}>Выйти</button> 
                    </div>
                </div>   
            </div>          
        </div> 
        :
        <div className={pathname.includes("/politics")
            ? "navbar_box-politics"
            : "navbar_box-user"}>
            <div className="wrap">
                <div className="navbar-flex">
                    <Link to={PUBLIC_ROUTE}>
                        <img src="/imges/logo.svg" alt="logo" />
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
                                <button>Мероприятия</button>
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
                            <button>Мероприятия</button>
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
