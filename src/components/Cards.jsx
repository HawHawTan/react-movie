import { useEffect, useState } from "react";

function Cards() {
    const api = import.meta.env.VITE_API_KEY;
    const [movie,setMovie] = useState(null);
    const [category, setCategory] = useState('now_playing');

    const getMovie =(c) =>{
      fetch(`https://api.themoviedb.org/3/movie/${c}?language=en-US&page=1&api_key=${api}` )
      .then(response => response.json())
      .then(response => setMovie(response.results))
      .catch(err => console.error(err));
    }
    useEffect(()=>{
      getMovie('now_playing');
    },[])


  return (
    <div>
        <h2>{category}</h2>
        <div>
          <button onClick={() => getMovie('now_playing')}>Now Playing</button>
          <button onClick={() => getMovie('popular')}>Popular</button>
          <button onClick={() => getMovie('top_rated')}>Top Rated</button>
          <button onClick={() => getMovie('upcoming')}>Upcoming</button>
        </div>
        <ul>
            { movie && movie.map(item => {
                return(
                    <li key={item.id}>
                      <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="" />
                      {/* <p>{item.title}</p> */}
                    </li>
                )
            })}
        </ul>
    </div>
  );
}
export default Cards