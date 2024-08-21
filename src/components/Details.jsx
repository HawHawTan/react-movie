import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const API = import.meta.env.VITE_API_KEY;

const Details = () => {
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

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <div className="movie-header">
                {/* Display the movie's poster */}
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                
                {/* Movie information */}
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <p>Release Date: {new Date(movie.release_date).toDateString()}</p>
                    <p>Rating: {movie.vote_average} / 10</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
