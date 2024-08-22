import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Find way to set global state
// pull in global data of favourite movies


function PageFavourites() {

    const favsArray = JSON.parse(localStorage.getItem('movieData'));

    return (
        <section>
            <ul>
                {favsArray && favsArray.map(item => {
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




            {/* <h2>Your Favourites</h2>
            <h3>{favMsg}</h3>
            <h3>{favTitle}</h3>
            <img src={`https://image.tmdb.org/t/p/w342${favImg}`} alt={favTitle} /> */}
        </section>
    )
}

export default PageFavourites