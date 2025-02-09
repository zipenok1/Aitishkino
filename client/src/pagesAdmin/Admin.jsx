import React, { useContext } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import '../styles/admin.css'
import { PUBLIC_ROUTE } from "../utils/const";
import {observer} from 'mobx-react-lite'

const Admin = observer( () => {

  const {user} = useContext(Context)
  
  const test = () =>{
    user.setIsAuth(false)
    localStorage.removeItem('token')
    history(PUBLIC_ROUTE)
  }

  const history = useNavigate()

return (
<div className="Admin">
      <button onClick={test}>Выйти</button>  
</div>
  );
})

export default Admin;