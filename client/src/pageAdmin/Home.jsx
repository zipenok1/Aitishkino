import React from 'react'
import MenuAdmin from "../component/menuAdmin";
import '../styles/admin/home.css'

function Home ()  {
  return (
    <div className="Admin">
      <div className="wraper">
        <div className="admin__contnet">
          <MenuAdmin/>
        </div>
      </div>
    </div>
    );
}

export default Home;