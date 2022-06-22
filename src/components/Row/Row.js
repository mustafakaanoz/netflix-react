import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../Row/Row.css"

function Row({ title, fetchUrl, isLargeNow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])


  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map(
          (movie) =>
            ((isLargeNow && movie.poster_path) || (!isLargeNow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeNow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeNow ? movie.poster_path : movie.backdrop_path
                  }`} alt={movie.name}
              />
            )

        )}
      </div>

    </div>
  )
}

export default Row