import React from 'react';
// import { Link } from 'react-router-dom';
import defaultPicture from '../MoviesCollection/default-image.jpg';
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ movieDetails }) {
  if (!movieDetails) return;
  const { poster_path, title, vote_average, overview, release_date } =
    movieDetails;

  return (
    <div>
      {poster_path ? (
        <img src={IMAGES_URL + poster_path} alt={title} />
      ) : (
        <img src={defaultPicture} alt={title} />
      )}
      <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
      <p>User Score: {`${Math.round(Number(vote_average) * 10)}%`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
    </div>
  );
}

export default MovieCard;
