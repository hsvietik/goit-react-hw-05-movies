import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  color: white;
  background-color: #0d253f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-style: inherit;
  color: inherit;
  font-weight: 700;
  &.active {
    color: #01b4e4;
  }
`;
