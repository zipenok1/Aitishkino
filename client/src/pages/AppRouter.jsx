import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./Main";
import Admin from "./Admin";

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/admin" element={<Admin/>}/>
    </Routes>
  );
}

export default AppRoutes;