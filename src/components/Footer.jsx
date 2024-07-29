import React from 'react';
import { getYear } from '../utilities/getDates';

const Footer = ({ copyright }) => (
	<footer>
        <p>&copy; {copyright} Kaleb/Haw Tan/Gustavo</p>
        <figure>
            <img src="../src/media/logo-curtaindrop.svg" alt="" />
        </figure>
        <p>For education purpose only.</p>
    </footer>
);

Footer.defaultProps = {
    copyright: getYear()
}

export default Footer;

