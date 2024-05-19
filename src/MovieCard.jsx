import React from 'react'

function MovieCard({ singleMovie, }) {
    return (
        <div className="movie">
            <div>
                <p>{singleMovie.Year}</p>
            </div>
            <div>
                <img src={singleMovie.Poster !== "N/A" ? singleMovie.Poster : 'https://via.placeholder.com/400'} alt={singleMovie.Title} />
            </div>

            <div>
                <span>{singleMovie.Type}</span>
                <h3>{singleMovie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard
