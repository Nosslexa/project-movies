import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContainer, MovieWrapper, MovieImage, MovieOverlay, MovieTitle } from "styles";

import { BASE_URL } from "utils/urls";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch(error => console.error(error))
  }, []);

  return (
    <MovieContainer>
      {movies.map((movie) => (
        <MovieWrapper key={movie.id} >
          <Link to={`/movies/${movie.id}`}>
            <MovieImage
              key={movie.title}
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : ''}
              alt="movie posters"
            ></MovieImage>
            <MovieOverlay>
              <MovieTitle>{movie.title}</MovieTitle>
              <p>Released {movie.release_date}</p>
            </MovieOverlay>
          </Link>
        </MovieWrapper>
      ))}
    </MovieContainer>
  );
};

export default MovieList;
