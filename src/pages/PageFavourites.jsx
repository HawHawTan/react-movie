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

    return (
        <section className="favourites">
            {favorites.length === 0 ? (
                <p className="no-favs">No favorites added yet.</p>
            ) : (
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
                                <p>{item.overview}</p>
                                <div id="info">
                                    <Link to={`/details/${item.id}`}>
                                        <button>More Info</button>
                                    </Link>
                                    <img
                                        id="heart-filled"
                                        src="./src/media/heart-hover.svg"
                                        alt="heart"
                                        onClick={() => handleRemoveFromFavorites(item.id)}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
export default PageFavourites;