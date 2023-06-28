import React from 'react';
import { Section, Poster, Description } from './MovieCard.styled';
import defaultPicture from '../../images/default-image.jpg';

const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ movieDetails }) {
  if (!movieDetails) return;
  const { poster_path, title, vote_average, overview, release_date, genres } =
    movieDetails;
  const genresToDisplay = genres.map(({ name }) => name).join(' ');

  return (
    <Section>
      {poster_path ? (
        <Poster src={IMAGES_URL + poster_path} alt={title} width="300" />
      ) : (
        <Poster src={defaultPicture} alt={title} />
      )}
      <Description>
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>User Score: {`${Math.round(Number(vote_average) * 10)}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genresToDisplay}</p>
      </Description>
    </Section>
  );
}

export default MovieCard;
