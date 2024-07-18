import { useEffect, useState } from "react";
import { MovieCard } from "../movieCard/movieCard";
import { MovieView } from "../movieView/movieView";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://favoritemoviesapi-9a2228476f9c.herokuapp.com/movies/")
      .then((response) => response.json())
      .then((data) => {
        console.log("movies from 'myfavoritemoviesapi:", data);
        const apiMovies = data.map((movieData) => {
          return {
            title: movieData.Title,
            actors: movieData.Actors,
            description: movieData.Description,
            genre: movieData.Genre.Name,
            director: movieData.Director.Name,
            id: movieData._id,
          };
        });
        setMovies(apiMovies);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>We're sorry! There seems to be no movies available.</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
