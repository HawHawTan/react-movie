import { useEffect } from 'react';

// Find way to set global state
// pull in global data of favourite movies

function PageFavourites() {

    const favTitle = localStorage.getItem("favTitle");

    return (
        <section>
            <h2>Your Favourites</h2>
            <h3>{favTitle}</h3>
        </section>
    )
}

export default PageFavourites