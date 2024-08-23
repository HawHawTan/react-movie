import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../App';

function PageFavourites() {

    const { favs, setFavs } = useContext(FavContext);

    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('movieData'));
        if (storedFavs) {
            setFavs(storedFavs);
        }
    }, [setFavs]);

    return (
        <section>
            <ul>
                {favs && favs.map(item => {
                    return (
                        <li key={item.id + "fav"} >
                            <Link to={`./details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title} /></Link>
                            <div className="overlay">
                                <h3>{item.title}</h3>
                                <p>{item.overview}</p>
                                <button>More Info</button>
                                <button onClick={() => { addFav(item) }}>Fav!</button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default PageFavourites