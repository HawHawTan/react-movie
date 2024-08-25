import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FavContext } from "../App";

function Sliderr({ movies }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { toggleFavs, isMovieFavorited, favStatus, setFavStatus } = useContext(FavContext);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const truncateString = (str) => {
    if (str.length <= 10) {
      return str;
    }
    const truncated = str.slice(0, 100).trim();
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    if (lastSpaceIndex > 0) {
      return truncated.slice(0, lastSpaceIndex) + "...";
    }
    return truncated + "..."; // In case there's no space
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: isMobile? "0" : (window.innerWidth > 1300 ?  (window.innerWidth > 1600 ? '340px ':'200px') :"150px"), 
    autoplay: true,
  };

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => {
          const favorited = isMovieFavorited(movie.id);

          return (
            <div id="hero-wrapper" key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  id="backdrop"
                  src={`https://image.tmdb.org/t/p/${isMobile ? "w342" : "original"
                    }${isMobile ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.title || "Movie"}
                />
              </Link>
              <div id="hero-desktop">
                <div id="hero-info">
                  <h2>{movie.title}</h2>
                  <p>{truncateString(movie.overview)}</p>
                  <div id="slider-buttons">
                    <Link to={`/details/${movie.id}`}>
                      <button>More Info</button>
                    </Link>
                    <img
                      id={favorited ? 'heart-filled' : 'heart'}
                      src='./src/media/heart-hover.svg'
                      alt="heart"
                      onClick={() => {
                        toggleFavs(movie)
                        setFavStatus(!favStatus)
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          )
        })}
      </Slider>
    </div>
  );
}

export default Sliderr;
