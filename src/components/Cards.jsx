import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../App";

function Cards({ getMovie, movies }) {
  const { toggleFavs } = useContext(FavContext);

  const truncateString = (str) => {
    if (str.length <= 10) {
      return str;
    }
    const truncated = str.slice(0, 100).trim();
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
      return truncated.slice(0, lastSpaceIndex) + "...";
    }
    return truncated + "...";
  };

  const isMovieFavorited = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((movie) => movie.id === movieId);
  };


  return (
    <div>
      <div id="movies-category-desktop">
        <button onClick={() => getMovie("popular")}>Popular</button>
        <button onClick={() => getMovie("top_rated")}>Top Rated</button>
        <button onClick={() => getMovie("upcoming")}>Upcoming</button>
        <button onClick={() => getMovie("now_playing")}>Now Playing</button>
      </div>
      <ul id="cards-ul">
        {movies &&
          movies.map((item) => {
            const favorited = isMovieFavorited(item.id);
            return (
              <li key={item.id}>
                <Link to={`/details/${item.id}`}>
                  <img
                    id="card-img"
                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    alt={item.title}
                  />
                </Link>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{truncateString(item.overview)}</p>
                  <div id="info">
                    <Link to={`/details/${item.id}`}>
                      <button>More Info</button>
                    </Link>
                    <img
                      id="heart"
                      src={`./src/media/${favorited ? 'heart-filled.svg' : 'heart-hover.svg'}`}
                      alt="heart"
                      onClick={() => toggleFavs(item)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cards;
