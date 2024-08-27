
export const isMovieFavorited = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favMovieData")) || [];
    return favorites.some((movie) => movie.id === movieId);
  };
