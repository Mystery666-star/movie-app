import React, {useState} from "react"
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import "./style.css";

const API_key = "8ad149d49276b9357325e77bf280b51a";

function App(){

  const[movieData, setMovieData]=useState([])
  const[loading, setLoading] =useState(false);
  const[error, setError]= useState(null)

  const movieSearch= async(movieTitle)=>{
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: API_key,
            query: movieTitle,
          },
        }
      );

      if (response.data.results) {
        setMovieData(response.data.results);
      } else {
        setMovieData([]);
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

    
  return(
    <div>
      <SearchBar fetchMovieTitle={movieSearch}></SearchBar>
      {loading && <p>Loading...</p>}
      <MovieList movieData={movieData}></MovieList>
      {error && <p>An error has occured</p>}
    </div>
  )
}
export default App;
