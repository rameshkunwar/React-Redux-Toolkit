import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "react-bootstrap/Image";

const MovieSearchResults = () => {
  const [movies, setMoviesInfo] = useState([]);

  const movieFromRedux = useSelector((state) => state.movies.movieResults);
  useEffect(() => {
    setMoviesInfo(movieFromRedux);
  }, [movieFromRedux]);

  const randomNumberWithMovieName = (moviename) => {
    return `${moviename}-${Math.floor(1000 + Math.random() * 8000)}`;
  };

  return (
    <div className='search-result-inner-container mt-2 '>
      {movies &&
        movies.map((mov) => (
          <div
            className='movie bg-secondary p-3 my-3'
            key={randomNumberWithMovieName(mov.Title)}
          >
            <div className='title-year'>
              <h3 className='title'> {mov.Title} </h3>
              <h4 className='year'>{mov.Year}</h4>
              <h4 className='type'>{mov.Type}</h4>
            </div>
            <div className='movie-poster'>
              <Image
                className='movie-poster-image'
                src={mov.Poster}
                alt='movie poster'
                fluid
              />
            </div>
          </div>
        ))}
    </div>
  );
};
export default MovieSearchResults;
