import { useEffect } from 'react';
import Nav from './Nav';

function Header() {

    // useEffect(() => {
    //     openHamburgerMenu()
    // }, []);

    function toggleHamburgerMenu() {
        const hamburgerMenu = document.querySelector('hamburger-menu-svg');
        const hamburgerMenuNavLinks = document.querySelector('nav-links');
        hamburgerMenu.classList.toggle('menu-open');
        hamburgerMenuNavLinks.classList.toggle('show-menu-links');
    }

    return (
        <header>
            <img className='logo-svg' src="./src/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />
            <img onClick={toggleHamburgerMenu} className='hamburger-menu-svg' src="./src/media/hamburger-menu.svg" alt="Curtain Drop Logo" />
            <Nav />
        </header>
    )
}

export default Header