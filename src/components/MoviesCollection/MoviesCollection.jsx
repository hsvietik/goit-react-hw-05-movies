import { Link } from 'react-router-dom';
import {
  Section,
  SectionTitle,
  List,
  Item,
  Picture,
  Title,
} from './MoviesCollection.styled';
import defaultPicture from './default-image.jpg';

const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';

function MoviesCollection({ movies, sectionTitle }) {
  return (
    <Section>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`}>
                {poster_path ? (
                  <Picture src={IMAGES_URL + poster_path} alt={title} />
                ) : (
                  <Picture src={defaultPicture} alt={title} />
                )}
                <Title>{title}</Title>
              </Link>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}
export default MoviesCollection;
