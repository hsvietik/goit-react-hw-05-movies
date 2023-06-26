import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { fetchTrendMovies } from '../../api';
import { Section, SectionTitle, List, Item, Title } from './TrendMovies.styled';

export function TrendMovies() {
  const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
  const abortCtrl = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function loadTrendMovies() {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();
      try {
        setIsLoading(true);
        const response = await fetchTrendMovies({
          abortCtrl,
        });
        setTrendMovies(response.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          return toast.warn(`Oops, something went wrong.`);
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadTrendMovies();
  }, []);

  return (
    <Section>
      <SectionTitle>Trending Today</SectionTitle>
      <List>
        {trendMovies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <img src={IMAGES_URL + poster_path} alt={title} width="150" />
              <Title>{title}</Title>
            </Item>
          );
        })}
      </List>
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
    </Section>
  );
}
