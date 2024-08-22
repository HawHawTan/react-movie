import React from 'react'
import Cards from '../components/Cards';
import Mobile_category from '../components/Mobile_category';
import { useEffect, useState } from "react";

function PageHome() {
    const api = import.meta.env.VITE_API_KEY;
    const [movie, setMovie] = useState(null);

    const getMovie = (c) => {
        fetch(`https://api.themoviedb.org/3/movie/${c}?language=en-US&page=1&api_key=${api}`)
            .then(response => response.json())
            .then(response => setMovie(response.results))
            .catch(err => console.error(err));
    };
    
    return (
        <main>
              <Cards getMovie={getMovie} movies={movie} />
              <Mobile_category getMovie={getMovie} />
        </main>
    )
}

export default PageHome