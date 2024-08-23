import { Link } from 'react-router-dom';

function PageFavourites() {

    const storedFavs = JSON.parse(localStorage.getItem('movieData'));

    return (
        <section>
            <ul>
                {storedFavs && storedFavs.map(item => {
                    return (
                        <li key={item.id + "fav"} >
                            <Link to={`./details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title} /></Link>
                            <div className="overlay">
                                <h3>{item.title}</h3>
                                <p>{item.overview}</p>
                                <button>More Info</button>
                                <button onClick={() => { toggleFav(item) }}>Fav!</button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default PageFavourites