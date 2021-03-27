import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieResultsSlice } from "../../redux/movieResultsSlice";
import MovieSearchResults from "./searchResults";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const IMDB_ID = process.env.REACT_APP_IMDB_ID;
const API_URL = "http://www.omdbapi.com/";

const ShowMovieSearchResults = () => {
  const { searchString } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const actions = movieResultsSlice.actions;

  useEffect(() => {
    if (searchString) {
      //let's make an api call to get results
      getMoviesInfo(searchString)
        .then((res) => {
          console.log(res);
          dispatch(actions.update(res.data.Search));
          //can also be done by  dispatch(update(res.data.Search))
          //by using import { update } from "../../redux/movieResultsSlice";
        })
        .catch((err) => {
          console.error(err);
          dispatch(actions.update([]));
          //can also be done by  dispatch(update(res.data.Search))
        });
    }

    // eslint-disable-next-line
  }, [searchString]);

  const getMoviesInfo = (searchStr) => {
    const fullUrl = `${API_URL}?i=${IMDB_ID}&apikey=${API_KEY}`;
    const options = {
      method: "GET",
      url: fullUrl,
      params: { s: searchStr, page: "1", r: "json" },
    };
    return axios.request(options);
  };

  return (
    <div className='movie-column d-flex bg-light m-3'>
      <div className='search-result-container'>
        <div className='search-string'>
          <h3>{searchString}</h3>
        </div>
        <MovieSearchResults />
      </div>
    </div>
  );
};
export default ShowMovieSearchResults;
