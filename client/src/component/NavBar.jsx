import React, { useContext } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, PUBLIC_ROUTE } from "../utils/const";
import {observer} from 'mobx-react-lite'
import '../styles/navbar/navbar.css'

const NavBar = observer(()=> {

    const {user} = useContext(Context)

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
                        <img src="imges/logo.svg" alt="1" />
                    </Link>                   
                    <div className="navnar-page">
                        <Link to={LOGIN_ROUTE}>
                            <button>Авторизация</button>
                        </Link>
                        <Link to={PUBLIC_ROUTE}>
                            <button>программа смен</button>
                        </Link>
                        <Link to={PUBLIC_ROUTE}>
                            <button>информация</button>
                        </Link>
                        <Link to={PUBLIC_ROUTE}>
                            <button>новости</button>
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
