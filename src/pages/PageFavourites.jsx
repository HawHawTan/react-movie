import { useEffect } from 'react';

// Find way to set global state
// pull in global data of favourite movies

function PageFavourites() {

    const favTitle = localStorage.getItem("favTitle");
    const favImg = localStorage.getItem("favImg");

    return (
        <section>
            <h2>Your Favourites</h2>
            <h3>{favTitle}</h3>
            <img src={`https://image.tmdb.org/t/p/w342${favImg}`} alt={favTitle} />
        </section>
    )
}

export default PageFavourites