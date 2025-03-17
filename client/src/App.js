import React from "react";
import AppRouter from "./component/AppRouter";
import NavBar from "./component/NavBar";
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
    </div>
  );
}

export default App;
