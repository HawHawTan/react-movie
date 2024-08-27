import { useEffect } from "react"
import { appTitle } from "../globals/globalVariables";


const PageAbout = () => {

    useEffect(() => {
        document.title = `About | ${appTitle}`;
    }, []);

    return (
        <div className="about-bg">
            <section className='about'>
                <h2>Welcome to CURTAIN DROP</h2><br />
                <h2>The stage for all things cinema!</h2><br />
                <p>Dive into a whirlwind of movie magic with our vibrant movie database website. From timeless classics to the latest blockbusters, we've got it all under one digital roof. Let the movie marathon begin at Curtain Drop - where the curtain will rise on your cinematic journey!</p>
                
                <div className="tmdb-attr">
                    <p className="tmdb-para">"This product uses the TMDb API but is not endorsed or certified by
                    TMDb”</p>
                    <a href="https://www.themoviedb.org/" target="blank"><img className="tmdb-logo" src="../src/media/tmdb_logo.svg" alt="TMDB logo"/></a>
                </div>
            </section>
        </div>
    );
};



export default PageAbout