import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../App";

function Cards({ getMovie, movies }) {
  const { toggleFavs, isMovieFavorited, favStatus, setFavStatus } = useContext(FavContext);

  const truncateString = (str) => {
    if (str.length <= 10) {
      return str;
    }
    const truncated = str.slice(0, 50).trim();
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
      return truncated.slice(0, lastSpaceIndex) + "...";
    }
    return truncated + "...";
  };

  function formatDateWithOrdinal(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    function getOrdinalSuffix(n) {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    }

    return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
  }

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
              // showing the poster of each movie
              <li key={item.id}>
                <Link to={`/details/${item.id}`}>
                  <img
                    id="card-img"
                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    alt={item.title}
                  />
                </Link>
                {/* this only shows when you hover on the cards */}
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p id="release-date">{formatDateWithOrdinal(item.release_date)}</p>
                  <p>{truncateString(item.overview)}</p>
                  <div id="info">
                    <Link to={`/details/${item.id}`}>
                      <button>More Info</button>
                    </Link>
                    <img
                      id={favorited ? 'heart-filled' : 'heart'}
                      src={`/curtain-drop/media/${favorited ? 'heart-hover.svg' : 'heart.svg'}`}
                      alt="heart"
                      onClick={() => {
                        toggleFavs(item)
                        setFavStatus(!favStatus)
                      }}
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
