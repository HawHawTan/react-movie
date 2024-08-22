import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


function Cards({getMovie,movies}){
  // const [movie, setMovie] = useState(null);
  const api = import.meta.env.VITE_API_KEY;
  // const getMovie = (c) => {
  //   fetch(`https://api.themoviedb.org/3/movie/${c}?language=en-US&page=1&api_key=${api}`)
  //       .then(response => response.json())
  //       .then(response => setMovie(response.results))
  //       .catch(err => console.error(err));
  // };
  // console.log(movies);
  
    useEffect(() => {
      getMovie('now_playing');
  }, []);
  return (
    
    <div>
       <div id="movies-category-desktop">
          <button onClick={() => getMovie('popular')}>Popular</button>
          <button onClick={() => getMovie('top_rated')}>Top Rated</button>
          <button onClick={() => getMovie('upcoming')}>Upcoming</button>
          <button onClick={() => getMovie('now_playing')}>Now Playing</button>
        </div >
        <ul>
            { movies && movies.map(item => {
                return(
                    <li key={item.id} >
                      <Link to={`/details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title}/></Link>
                      <div className="overlay">
                        <h3>{item.title}</h3>
                        <p>{item.overview}</p>
                        <Link to={`/details/${item.id}`}><button>More Info</button></Link>
                      </div>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}
export default Cards