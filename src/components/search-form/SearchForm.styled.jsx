import styled from '@emotion/styled';

export const SearchForm = styled.form`
  background-color: inherit;
  height: 34px;
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
`;

export const Input = styled.input`
  background-color: inherit;
  text-indent: 1em;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #707070;
  &:focus {
    outline: none;
    border: 2px solid orangered;
  }
`;

export const Button = styled.button`
  height: 100%;
  display: inline-block;
  background-color: transparent;
  position: absolute;
  right: 0;
  border: none;
  cursor: pointer;

  &:hover {
    color: #ff4500;
    transition: 250ms;
  }
`;
