import React, { useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import {authRoutes, publicRoutes} from "../router";
import { Context } from "..";
import {observer} from 'mobx-react-lite'
import {PUBLIC_ROUTE} from "../utils/const"

const AppRouter = observer(() => {

    const {user} = useContext(Context)
    
    console.log(user._isAuth);
  
    return (
      <Routes>
          {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} Component={Component} exact/>     
          )}
           {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} Component={Component} exact/>
          )}
          <Route path="*" element={< Navigate to={PUBLIC_ROUTE} replace />}/>
          
      </Routes>
    );
  })
  
  export default AppRouter;