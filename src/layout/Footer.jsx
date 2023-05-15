import React from 'react'
import logo from "../assets/logo_blanc.webp"

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__img'>
                <img src={logo} alt='Logo blanc de Kasa' />
            </div>
            <div className='footer__text'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer