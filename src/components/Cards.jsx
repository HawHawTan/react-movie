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

  const [currFavorites, setCurrFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favMovieData")) || [];
    setCurrFavorites(storedFavorites);
  }, []);

  const toggleFavs = (movie) => {
    let favorites = JSON.parse(localStorage.getItem("favMovieData")) || [];
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    if (!isFavorite) {
      favorites.push(movie);
      localStorage.setItem("favMovieData", JSON.stringify(favorites));
    } else {
      // remove movie if already in faourites (toggle)
      // looks through array of fav movies, returns all movie that don't match movie passed in to function
      const updatedFavorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
      setCurrFavorites(updatedFavorites);
      localStorage.setItem("favMovieData", JSON.stringify(updatedFavorites));
    }
  };

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
                <button onClick={() => { toggleFavs(item) }}>LET ME BE YOUR FAVOURITE!!!</button>

              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default Cards