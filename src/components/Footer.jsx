import React from 'react';
import { getYear } from '../utilities/getDates';
const Footer = ({ copyright = getYear() }) => (
    <footer>
        <p>&copy; {copyright} Kaleb/Haw Tan/Gustavo</p>
        <figure>
            <img src="../src/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />
        </figure>
        <p>For education purposes only.</p>
    </footer>
);
export default Footer;