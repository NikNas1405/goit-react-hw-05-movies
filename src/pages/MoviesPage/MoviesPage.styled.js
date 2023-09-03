import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  margin: 20px auto;
  align-items: center;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: block;
  appearance: none;
  border: 0;
  outline: 0;
  height: 40px;
  background-color: white;
  padding: 0 10px;
  min-width: 350px;

  transition: all 0.2s ease;
  &:focus-within {
    box-shadow: 0 3px 5px -2px rgba(0, 0, 0, 0.3);
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  
  background-color: #eb3324;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 80px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:is(:focus, :hover) {
    background-color: #1134a6;
  }
`;


export const QueryFilmsListStyled = styled.ul`
  gap: 28px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;