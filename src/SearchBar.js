import React, {useState} from "react";

const SearchBar=({fetchMovieTitle})=>{
    const[movieTitle, setMovieTitle] =useState(null);
    const SearchMovie=()=>{
        fetchMovieTitle(movieTitle);
    }
    return(
        <div>
            <input 
                type="text"
                value={movieTitle}
                onChange={(e)=> setMovieTitle(e.target.value)}
                placeholder="Type the title of the movie"
            ></input>
            <button onClick={SearchMovie}>Search</button>
        </div>
    )
}

export default SearchBar;