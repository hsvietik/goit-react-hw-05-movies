import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px;
  display: flex;
  gap: 20px;
`;
export const BackLink = styled(Link)`
  display: inline-block;
  margin: 6px;
  padding: 5px;
  border-radius: 20px;
  font-size: 12px;
  /* background-color: #90cea1; */
  background: linear-gradient(0.25turn, #90cea1, #01b4e4);
  text-align: center;
`;
export const Poster = styled.img`
  width: 200px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
`;
