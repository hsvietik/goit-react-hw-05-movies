import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section``;
export const SectionNav = styled.div`
  padding: 4px 20px;
  background-color: #90cea1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const InfoLink = styled(Link)`
  display: inline-block;
  margin: 6px;
  padding: 5px;
  width: 70px;
  border-radius: 20px;
  color: white;
  background-color: #0d253f;
  /* background: linear-gradient(0.25turn, #90cea1, #01b4e4); */
  text-align: center;
`;
