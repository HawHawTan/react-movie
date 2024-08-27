function MobileCategory({ getMovie }) {
  return (
    <div id="movies-category-mobile">
      <button onClick={() => getMovie('popular')}><img src="/curtain-drop/media/popular.svg" alt="popular" /><p>Popular</p></button>
      <button onClick={() => getMovie('top_rated')}><img src="/curtain-drop/media/top-rated.svg" alt="top-rated" /><p>Top Rated</p></button>
      <button onClick={() => getMovie('upcoming')}><img src="/curtain-drop/media/upcoming.svg" alt="upcomoing" /><p>Upcoming</p></button>
      <button onClick={() => getMovie('now_playing')}> <img src="/curtain-drop/media/now-playing.svg" alt="now-playing" /><p>Now Playing</p></button>
    </div>
  );
}
export default MobileCategory