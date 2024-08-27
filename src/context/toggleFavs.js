
export const toggleFavs = (movie) => {
    let favorites = JSON.parse(localStorage.getItem("favMovieData")) || [];
    const isFavorite = favorites.find((fav) => fav.id === movie.id);
    if (!isFavorite) {
        favorites.push(movie);
        localStorage.setItem("favMovieData", JSON.stringify(favorites));
    } else {
      // remove movie if already in faourites (toggle)
      // looks through array of fav movies, returns all movie that don't match movie passed in to function
        const updatedFavorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
        localStorage.setItem("favMovieData", JSON.stringify(updatedFavorites));
    }
};
