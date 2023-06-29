import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import {
  StyledSearchbar,
  StyledForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit, initialValue }) {
  const handleSubmit = ({ query }) => {
    onSubmit(query.toLowerCase());
  };

  return (
    <StyledSearchbar>
      <Formik initialValues={{ query: initialValue }} onSubmit={handleSubmit}>
        <StyledForm>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for a movie"
            name="query"
          />
          <SearchButton type="submit">
            <ImSearch size="20px" />
          </SearchButton>
        </StyledForm>
      </Formik>
    </StyledSearchbar>
  );
}
export default Searchbar;
