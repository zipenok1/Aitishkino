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
        console.log(process.env.REACT_APP_API_URL);
        try{
            let data = await login(email, password)
            console.log(data);
            user.setUser(user)
            user.setIsAuth(true)
            history(ADMIN_ROUTE)
        } catch(e){
            alert(e.response.data.message)
        }
    }

  return (
    <div className="Authorization wrap" >
        <div className="authorization__box">
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
                    Авторизоваться
                </button>  
        </div>         
    </div>
  );
})

export default Authorization;