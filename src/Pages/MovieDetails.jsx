import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieDetails } from '../api';
import MovieCard from 'components/MovieCard/MovieCard';

function MovieDetails() {
  const abortCtrl = useRef();
  const movieID = 420818;
  // const [movieID, setMovieID] = useState(420818);
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    async function loadMovieDetails() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setIsLoading(true);
        const response = await fetchMovieDetails({
          abortCtrl,
          movieID,
        });
        setMovieDetails(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          return toast.warn(`Oops, something went wrong.`);
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMovieDetails();
  }, []);

  return (
    <div>
      <MovieCard movieDetails={movieDetails} />
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
export default MovieDetails;
