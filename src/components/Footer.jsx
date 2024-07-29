import { getYear } from '../utilities/getDates';

const Footer = ({ copyright, author }) => (
	<footer>
        <figure>
            <img src="../src/media/logo-curtaindrop.svg" alt="" />
        </figure>
        <p>&copy; {copyright} {author}</p>
        <p>For education purpose only.</p>
    </footer>
);

Footer.defaultProps = {
    author: 'Kaleb/Haw Tan/Gustavo',
    copyright: getYear()
}

export default Footer;