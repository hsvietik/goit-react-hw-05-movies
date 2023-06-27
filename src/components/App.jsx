import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import NotFound from 'Pages/NotFound';
import MovieDetails from '../Pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
