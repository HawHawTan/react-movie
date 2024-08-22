import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliderr({ movies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  };

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <img 
              id="backdrop"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title || "Movie"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliderr;
