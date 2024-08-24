import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PageFavourites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favMovieData")) || [];
        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFromFavorites = (movieId) => {
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favMovieData", JSON.stringify(updatedFavorites));
        alert("Movie removed from favorites!");
    };

    return (
        <div>
            <h1>Your Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorites added yet.</p>
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
                                        id="heart"
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
        </div>
    );
}
export default PageFavourites;