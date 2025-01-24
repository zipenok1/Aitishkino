import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
        <Link to={'/admin'}>
            <button>Админ панель</button>
        </Link>
    </div>
  );
}

export default Main;
