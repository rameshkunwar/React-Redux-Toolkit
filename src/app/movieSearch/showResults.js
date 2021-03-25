import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const API_KEY = process.env.REACT_APP_RAPID_API_IMDB_KEY;
const API_URL = "https://movie-database-imdb-alternative.p.rapidapi.com/";
const API_HOST = "movie-database-imdb-alternative.p.rapidapi.com";

const ShowMovieSearchResults = () => {
  const { searchString } = useSelector((state) => state.search);

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (searchString && searchString !== searchWord) {
      //let's make an api call to get results
      getMoviesInfo(searchString)
        .then((res) => {
          console.log(res);
          // setSearchWord(searchString);
        })
        .catch((err) => {
          console.error(err);
          // setSearchWord(searchString);
        });
    }

    // eslint-disable-next-line
  }, [searchString]);

  const getMoviesInfo = (searchStr) => {
    const options = {
      method: "GET",
      url: API_URL,
      params: { s: searchStr, page: "1", r: "json" },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    };
    return axios.request(options);
  };

  return (
    <div className='search-result-container'>
      <div className='search-string'>
        <h3>{searchWord}</h3>
      </div>
      <div className='search-results'>here comes results</div>
    </div>
  );
};
export default ShowMovieSearchResults;
