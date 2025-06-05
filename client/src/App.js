import React, { useContext, useEffect, useState } from "react";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "./utils/const";
import { useLocation, useNavigate } from "react-router-dom";
import AppRouter from "./component/AppRouter";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import './styles/app.css'
import { Context } from ".";
import { check } from "./http/user";
import { observer } from "mobx-react-lite";

const App = observer( () => {

  const {user} = useContext(Context)
  const history = useNavigate()

  useEffect(()=>{
    try {
      if (localStorage.getItem('token')){
        check().then(() => {
          user.setIsAuth(true)
          history(ADMIN_ROUTE)
        })
      }
    } catch(e){
      console.error(e);
    }    
  },[])

  const {pathname} = useLocation()

  return (
    <div className="App">
      {pathname == LOGIN_ROUTE ? null : <NavBar/>}
      <AppRouter/>
      {pathname == LOGIN_ROUTE ? null : <Footer/>}
    </div>
  );
})

export default App;
