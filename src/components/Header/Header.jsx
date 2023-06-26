import React from 'react';
import { StyledHeader, Navigation, NavigationLink } from './Header.styled';
import logo from './tmdb-logo.svg';
export function Header() {
  return (
    <StyledHeader>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="The movie DB logo" width={250} />
      </a>
    </StyledHeader>
  );
}
