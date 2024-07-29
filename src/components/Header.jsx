import React from 'react'
import '../media/logo-curtaindrop.svg';

function Header() {



    return (
        <header>
            <img className='logo-svg' src="./src/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />
            <img className='hamburger-menu-svg' src="./src/media/hamburger-menu.svg" alt="Curtain Drop Logo" />
        </header>
    )
}

export default Header