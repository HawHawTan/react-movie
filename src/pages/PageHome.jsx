import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Mobile_category from "../components/Mobile_category";
import Sliderr from "../components/Sliderr";

function PageHome() {
  const api = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState([]);

  const getMovie = (c) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${c}?language=en-US&page=1&api_key=${api}`
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie("now_playing");
  }, []);

  return (
    <main>
      <Sliderr movies={movie} />
      <Cards getMovie={getMovie} movies={movie} />
      <Mobile_category getMovie={getMovie} />
    </main>
  );
}

export default PageHome;
