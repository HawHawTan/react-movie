import { NavLink } from 'react-router-dom';

function Nav() {



    return (
        <nav className='nav-links'>
            <ul className='nav-link-list'>
                <li className='nav-list'><NavLink to="/">Home</NavLink></li>
                <li className='nav-list'><NavLink to="/favourites">Favourites</NavLink></li>
                <li className='nav-list'><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav