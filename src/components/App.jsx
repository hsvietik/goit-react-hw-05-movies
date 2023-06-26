import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { NotFound } from 'Pages/NotFound';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
