import { useState, useEffect } from 'react';
import Nav from './Nav';

function Header() {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 320);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth <= 320);
            if (window.innerWidth > 320) {
                setIsHamburgerMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function toggleHamburgerMenu() {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }

    return (
        <header>
            <img className='logo-svg' src="/src/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />

            {isSmallScreen && (
                <img
                    onClick={toggleHamburgerMenu}
                    className={isHamburgerMenuOpen ? 'hamburger-menu-svg menu-open' : 'hamburger-menu-svg'}
                    src="/src/media/hamburger-menu.svg"
                    alt="Curtain Drop Logo"
                />
            )}
            
            {(!isSmallScreen || isHamburgerMenuOpen) && <Nav />}
        </header>
    );
}

export default Header;
