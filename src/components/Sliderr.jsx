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

  function formatDateWithOrdinal(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    function getOrdinalSuffix(n) {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    }

    return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
  }

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
    centerPadding: isMobile ? "0" : (window.innerWidth > 1300 ? (window.innerWidth > 1600 ? '340px ' : '200px') : "150px"),
    autoplay: true,
  };

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <Slider {...settings}>
        {movies.map((item) => {
          const favorited = isMovieFavorited(item.id);
          return (
            <div id="hero-wrapper" key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img
                  id="backdrop"
                  src={`https://image.tmdb.org/t/p/${isMobile ? "w342" : "original"
                    }${isMobile ? item.poster_path : item.backdrop_path}`}
                  alt={item.title || "Movie"}
                />
              </Link>
              <div id="hero-desktop">
                <div id="hero-info">
                  <h2>{item.title}</h2>
                  <p id="release-date">{formatDateWithOrdinal(item.release_date)}</p>
                  <p>{truncateString(item.overview)}</p>
                  <div id="slider-buttons">
                    <Link to={`/details/${item.id}`}>
                      <button>More Info</button>
                    </Link>
                    <img
                      id={favorited ? 'silder-heart-filled' : 'silder-heart'}
                      src={`/curtain-drop/media/${favorited ? 'heart-hover.svg' : 'heart.svg'}`}
                      alt="heart"
                      onClick={() => {
                        toggleFavs(item)
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
