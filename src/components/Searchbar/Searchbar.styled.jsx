import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledSearchbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #90cea1;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 40px;
  overflow: hidden;
`;
export const SearchButton = styled.button`
  display: inline-block;
  padding: 0px 14px 0px 10px;
  width: 40px;
  height: 40px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #fff;
  color: #0d253f;
  &:hover {
    color: #01b4e4;
  }
`;
export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  height: 40px;
  padding: 0px 0px 0px 14px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
