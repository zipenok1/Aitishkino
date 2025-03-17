import React from 'react'
import '../styles/component/newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className="newsletter__content">
            <div className='newsletter__content-title'>
                <h3>Хотите узнавать о скидках и предложениях первыми ?</h3>
                <p>Подпишитесь на рассылку!</p>
            </div>
            <div className='newsletter__content-box'>
                <form className='newsletter__box-from'>
                    <input type="text" placeholder='Ваш e-mail'/>
                    <input type="sumbit" value='Подписаться'/>
                </form>
                <div className="newsletter__box-text">
                    <p>Нажимая на кнопку “Подписаться” вы соглащаетесь <br/> с Политикой конфиденциальности</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter