import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { FavContext } from "../App";

function Cards() {
  const api = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState(null);
  const [category, setCategory] = useState('now_playing');
  const { favs, setFavs } = useContext(FavContext);

  const getMovie = (c) => {
    fetch(`https://api.themoviedb.org/3/movie/${c}?language=en-US&page=1&api_key=${api}`)
      .then(response => response.json())
      .then(response => setMovie(response.results))
      .catch(err => console.error(err));
  }
  useEffect(() => {
    getMovie('now_playing');
  }, [])

  // add to local storage when favourite function is run with use effect
  useEffect(() => {
    const favMovieDataStringified = JSON.stringify(favs);
    localStorage.setItem('movieData', favMovieDataStringified);
  }, [toggleFav])

  function toggleFav(movieData) {

    // check if movie id is already in favs
    if (favs.length > 0) {
      const storedFavs = JSON.parse(localStorage.getItem('movieData'));
      let movieAlreadyFavourited = false;
      storedFavs.map((storedFav) => {

        if (storedFav.id == movieData.id) {
          movieAlreadyFavourited = true;
        } else {
          movieAlreadyFavourited = false;
        }
      });

      if (!movieAlreadyFavourited) {
        setFavs([...favs, movieData]);
      } else {
        // remove from favs
        console.log("remove this movvie from favs");

      }

    } else {
      // if first movie
      // add movie to favourites (local storage)
      setFavs([...favs, movieData]);
    }

  }

  return (
    <div>
      <div id="movies-category">
        <button onClick={() => getMovie('now_playing')}>Now Playing</button>
        <button onClick={() => getMovie('popular')}>Popular</button>
        <button onClick={() => getMovie('top_rated')}>Top Rated</button>
        <button onClick={() => getMovie('upcoming')}>Upcoming</button>
      </div >
      <ul>
        {movie && movie.map(item => {
          return (
            <li key={item.id} >
              <Link to={`/details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title} /></Link>
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
                <button>More Info</button>
                <button onClick={() => { toggleFav(item) }}>LET ME BE YOUR FAVOURITE!!!</button>

              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default Cards