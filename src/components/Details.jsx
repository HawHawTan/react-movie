import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { FavContext } from "../App";
const API = import.meta.env.VITE_API_KEY;

const Details = () => {
    const [movie, setMovie] = useState(null);
    const { toggleFavs, isMovieFavorited, favStatus, setFavStatus } = useContext(FavContext);

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

    const favorited = isMovieFavorited(movie.id);

    return (

        <section className="movie-details">
            <img className='backdrop-movie' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />


            <div className="movie-header">
                {/* Display the movie's poster */}
                <figure className='heart-poster-wrap'>
                    <img className='poster-movie' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <img
                        className={favorited ? 'heart-filled' : 'heart'}
                        src="/src/media/heart-hover.svg"
                        alt="heart"
                        onClick={() => {
                            toggleFavs(movie)
                            setFavStatus(!favStatus)
                        }}
                        style={{ cursor: "pointer" }}
                    />
                    <p className='rating-detail'>
                        <span className='rating-value'>{formatRating(movie.vote_average)}</span>
                    </p>
                </figure>

                {/* Movie information */}
                <div className="movie-info">

                    <div className='text-detail-wrap'>
                        <h1 className='title-detail'>{movie.title}</h1>
                        <p className='date-detail'>{formatDateWithOrdinal(movie.release_date)}</p>

                        <p className='p-detail'>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
