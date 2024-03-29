import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const FilmDataBox = styled.div`
  display: block;
  padding: 20px;
  box-shadow: 0px 3px 3px -3px #707070;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ImageBox = styled.div`
  min-width: 300px;
  margin-right: 2rem;
`;

export const AdditionalInfo = styled.div`
  padding: 20px;
  padding-top: 0;
  box-shadow: 0px 3px 3px -3px #707070;
  margin-bottom: 40px;
`;

export const GoBack = styled(Link)`
  display: inline-flex;
  margin-left: 20px;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2em;
  padding-left: 0;
`;

export const AdditionalInfoLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;

  :hover {
    color: orangered;
  }

  &.active {
    border: 1px solid orangered;
    color: orangered;
  }
`;
