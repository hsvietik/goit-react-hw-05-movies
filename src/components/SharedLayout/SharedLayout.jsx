import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled.jsx';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
export default SharedLayout;
