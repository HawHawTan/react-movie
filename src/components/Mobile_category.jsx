function Mobile_category({ getMovie }) {
  return (
    <div id="movies-category-mobile">
         <button onClick={() => getMovie('popular')}><img src="./src/media/popular.svg" alt="popular"/> Popular</button>
        <button onClick={() => getMovie('top_rated')}><img src="./src/media/top-rated.svg" alt="top-rated" />Top Rated</button>
        <button onClick={() => getMovie('upcoming')}><img src="./src/media/upcoming.svg" alt="upcomoing" />Upcoming</button>
        <button onClick={() => getMovie('now_playing')}> <img src="./src/media/now-playing.svg" alt="now-playing" />Now Playing</button> 
    </div>
  );
}
export default Mobile_category