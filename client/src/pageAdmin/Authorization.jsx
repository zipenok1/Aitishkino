import React, { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../utils/const";
import { login } from "../http/user";
import { Context } from "..";
import {observer} from 'mobx-react-lite'
import '../styles/admin/authorization.css'

const Authorization = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    const signIn = async () =>{
        try{
            let data = await login(email, password)
            user.setIsAuth(true)
            history(ADMIN_ROUTE)
        } catch(e){
            alert(e.response.data.message)
        }
    }

  return (
    <div className="Authorization wrap" >
        <div className="authorization__box">
            <h3>Авторизация</h3>
            <input 
                    className="text"
                    type="text"
                    name="email"
                    placeholder="Введите почту"
                    value={email}
                    autoComplete="off"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
                <input 
                    className="text" 
                    type="password"
                    name="password"
                    placeholder="Введите пароль"
                    value={password}
                    autoComplete="off"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
                <button 
                    className="btm"
                    onClick={signIn}
                >
                    Войти
                </button>  
        </div>         
    </div>
  );
})

export default Authorization;