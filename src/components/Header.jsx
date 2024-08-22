import { useState, useEffect } from 'react';
import Nav from './Nav';

function Header() {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    function toggleHamburgerMenu() {
        // toggle boolean state of menu
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
        console.log();
    }

    return (
        <header>
            <img className='logo-svg' src="/src/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />

            {/* if button clicked (check state) display open menu with nav links. Else just display button */}
            <img onClick={toggleHamburgerMenu} className={isHamburgerMenuOpen ? 'hamburger-menu-svg menu-open' : 'hamburger-menu-svg'} src="/src/media/hamburger-menu.svg" alt="Curtain Drop Logo" />
            {isHamburgerMenuOpen && <Nav />}
        </header>
    )
}

export default Header