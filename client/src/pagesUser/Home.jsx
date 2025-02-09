import React from 'react'
import '../styles/userStyles/home.css'

function Home() {
  return (
    <div className='Home'>
      <div className='Home_text'>
        <h1>Лагерь юных <span>программистов</span></h1>
        <p>Помогаем детям найти себя, подготовиться к востребованной IT-профессии и построить мир будущего</p>
        <button>Оформить бронь</button>
      </div>
    </div>
  )
}

export default Home