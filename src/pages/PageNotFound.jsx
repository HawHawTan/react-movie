// Page Not Found

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globalVariables';

function PageNotFound(){

	useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);

	return (
		<main>
			<section className='not-found-wrapper'>
				<p className='not-found-p'>Ooops! The page you are looking for doesn't exist.</p>
				<p className='not-found-p2'><Link to="/">Click here to go back.</Link></p>
			<img className='logo-svg-not-found' src="/src/media/logo-curtaindrop.svg" alt="Curtain Drop Logo" />
			</section>
		</main>
	);
}

export default PageNotFound;