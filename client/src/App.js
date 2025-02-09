import React, { useContext } from "react";
import AppRoutes from "./component/AppRouter";
import './styles/app.css'
import NavBar from "./component/NavBar";
import { Context } from ".";


function App () {
 
  const {user} = useContext(Context)

  return (
    <div className="App">
        <NavBar/>
        <div className="wrap">
          <AppRoutes/>
        </div>   
    </div>
  );
}

export default App;
