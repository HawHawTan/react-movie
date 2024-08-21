import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Find way to set global state
// pull in global data of favourite movies

function PageFavourites() {

    const movieFavs = useSelector((state) => state.favs.items);

    return (
        <section>
            <h2>Your Favourites</h2>

        </section>
    )
}

export default PageFavourites