import React from "react";
import { LOGIN_ROUTE } from "./utils/const";
import { useLocation } from "react-router-dom";
import AppRouter from "./component/AppRouter";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import './styles/app.css'

function App() {

  const {pathname} = useLocation()

  return (
    <div className="App">
      {pathname == LOGIN_ROUTE ? null : <NavBar/>}
      <AppRouter/>
      {pathname == LOGIN_ROUTE ? null : <Footer/>}
      
    </div>
  );
}

export default App;
