import { useEffect, useState } from "react"
import "./App.css"
import searchIcon from "./Search.svg"
import MovieCard from "./MovieCard"

// c1879c5c

const movie1 = {
  "Title": "Batman: The Animated Series",
  "Year": "1992–1995",
  "imdbID": "tt0103359",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZmVkNDc3YjQtZDMzOS00MTNjLTljNzUtZDhjYWQxMmVlNjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
}

function App() {
  const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=c1879c5c`

  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm]=useState("")

  async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("batman")
  }, [])

  return (
    <div className="app">
      <h1 >MoviesLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value) }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((singleMovie, index) => (
                <MovieCard
                  key={index}
                  singleMovie={singleMovie}
                />
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )

      }


    </div>
  )
}

export default App
