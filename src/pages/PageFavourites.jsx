import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globalVariables";


function PageFavourites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        document.title = `Favorites | ${appTitle}`;
    }, []);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favMovieData")) || [];
        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFromFavorites = (movieId) => {
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favMovieData", JSON.stringify(updatedFavorites));
    };

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
    function formatRating(rating) {
        return `${(rating * 10).toFixed(0)}`;
    }


    return (
        <section>
            {favorites.length === 0 ? (
                <div className="no-favourites">
                    <p>looks like you don't have any favourited movies yet! <br />click the <img className="no-favs-heart" src="/curtain-drop/media/heart-hover.svg" alt="heart-btn" /> button to add a movie to your favourites</p>
                </div>
            ) : (
                <div className="favourites">
                    <ul id="cards-ul">
                        {favorites.map((item) => (
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
                                    <p className='rating-value-favs'>
                                        Movie Rating: <span>{formatRating(item.vote_average)}</span>%
                                    </p>
                                    <p id="release-date-favs">{formatDateWithOrdinal(item.release_date)}</p>
                                    <p>{truncateString(item.overview)}</p>
                                    <div id="info">
                                        <Link to={`/details/${item.id}`}>
                                            <button>More Info</button>
                                        </Link>
                                        <img
                                            id="heart-filled"
                                            src="/curtain-drop/media/heart-hover.svg"
                                            alt="heart"
                                            onClick={() => handleRemoveFromFavorites(item.id)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}
export default PageFavourites;