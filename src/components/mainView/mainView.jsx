import { useState } from "react";
import { MovieCard } from "../movieCard/movieCard";
import { MovieView } from "../movieView/movieView";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Matrix",
      genre: "sci-fi",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      image: "",
      director: "The Wachowskis",
    },
    {
      id: 2,
      title: "La La Land",
      genre: "romance",
      description:
        "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      image: "",
      director: "Damien Chazelle",
    },
    {
      id: 3,
      title: "Slumdog Millionaire",
      genre: "drama",
      description:
        "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of 'Who Wants to Be a Millionaire?'",
      image: "",
      director: "Danny Boyle",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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
