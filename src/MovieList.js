import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
const MovieList = ({ movieData }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const[selectedMovieDetail, setSelectedMovieDetail]=useState(false);
    const handleViewMore = (movie) => {
        setSelectedMovie(movie);
        setSelectedMovieDetail(true);
    };
    return(
        <>
        
        {!selectedMovieDetail && (
         <div className="Movie-container">
         {movieData.slice(0, 5).map((detail) => (
         <div key={detail.id}>
         <h3>{detail.title}</h3>
         <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title} />
         <p>Plot: {detail.overview}</p>
         <p>Release date: {detail.release_date}</p>
         <p>Popularity: {detail.popularity}</p>
         <button onClick={() => handleViewMore(detail)}>View More</button>
         </div>
         ))}
        </div>
        )
        }
          {selectedMovieDetail && (
            <div>
                <button onClick={()=> setSelectedMovieDetail(false)}>Back</button>
            <MovieDetails movieData={selectedMovie} />
            </div>
        )}
        </>
    );
};
export default MovieList;
