import React from "react"
const MovieDetails=({movieData})=>{
    if(!movieData || movieData.length === 0){
        return( <p></p>)
    }
    return(
        <div className="Movie-container">
                <div>
                 <h3>{movieData.title}</h3>
                 <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}alt={movieData.title}/>
                 <p>Plot: {movieData.overview}</p>
                 <p>Release date:  {movieData.release_date}</p>
                 <p>Popularity:  {movieData.popularity}</p>
                 <p>Language:{movieData.original_language}</p>
                 <p>Vote Count:{movieData.vote_count}</p>
                </div>
                
        </div>
    )
}

export default MovieDetails;