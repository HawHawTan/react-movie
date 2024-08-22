import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


function Cards({getMovie,movies}){
  // const [movie, setMovie] = useState(null);
    const api = import.meta.env.VITE_API_KEY;
    const truncateString = (str) => {
      if (str.length <= 10) {
        return str;
    }
    const truncated = str.slice(0, 100).trim();
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (lastSpaceIndex > 0) {
        return truncated.slice(0, lastSpaceIndex) + '...';
    }
    return truncated + '...';  // In case there's no space
  }
 
  return (
    <div>
       <div id="movies-category-desktop">
          <button onClick={() => getMovie('popular')}>Popular</button>
          <button onClick={() => getMovie('top_rated')}>Top Rated</button>
          <button onClick={() => getMovie('upcoming')}>Upcoming</button>
          <button onClick={() => getMovie('now_playing')}>Now Playing</button>
        </div>
        <ul>
            { movies && movies.map(item => {
              console.log('====================================');
              console.log(item.title);
              console.log('====================================');
                return(
                    <li key={item.id} >
                      <Link to={`/details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title}/></Link>
                      <div className="overlay">
                        <h3>{item.title}</h3>
                        <p>{truncateString(item.overview)}</p>
                        <div id="info">
                          <Link to={`/details/${item.id}`}><button>More Info</button></Link>
                          <img id='heart' src="./src/media/heart-hover.svg" alt="heart" />
                        </div>
                      </div>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}
export default Cards