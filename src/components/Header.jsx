import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Nav from './Nav';

function Header() {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 320);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth <= 560);
            if (window.innerWidth > 560) {
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
            <Link to="/"> {/* Use Link to navigate to the home page */}
                <img className='logo-svg' src="/curtain-drop/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />
            </Link>

            {isSmallScreen && (
                <img
                    onClick={toggleHamburgerMenu}
                    className={isHamburgerMenuOpen ? 'hamburger-menu-svg menu-open' : 'hamburger-menu-svg'}
                    src="/curtain-drop/media/hamburger-menu.svg"
                    alt="Curtain Drop Logo"
                />
            )}

            {(!isSmallScreen || isHamburgerMenuOpen) && <Nav />}
        </header>
    );
}

export default Header;
