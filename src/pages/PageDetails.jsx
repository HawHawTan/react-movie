import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_MOVIE_API_KEY;

const PageDetails = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}`);
            const json = await result.json();
            setMovie(json);
        };

        getMovie();
    }, [id]);

    return (
        <div>
            {movie ? (
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PageDetails;
