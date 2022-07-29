import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmDataBox = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: 1px 3px 3px #b9b9b9;
`;

export const ImageBox = styled.div`
  min-width: 300px;
  margin-right: 2rem;
`;

export const AdditionalInfo = styled.div`
  padding: 20px;
  padding-top: 0;
  box-shadow: 1px 3px 3px #b9b9b9;
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
