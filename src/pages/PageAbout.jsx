import { useEffect } from "react"
import { appTitle } from "../globals/globalVariables";

const PageAbout = () => {

    useEffect(() => {
        document.title = `About | ${appTitle}`;
    }, []);

    return (
        <div>
    
            <section className='about'>
                <h2>Welcome to CURTAIN DROP</h2>
                <h3>The stage for all things cinema!</h3>
                <p>Dive into a whirlwind of movie magic with our vibrant movie database website. From timeless classics to the latest blockbusters, we've got it all under one digital roof. Let the movie marathon begin at Curtain Drop - where the curtain will rise on your cinematic journey!</p>
            </section>
    
        </div>
    );
};



export default PageAbout