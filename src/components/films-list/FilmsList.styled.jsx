import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding: 0.5em;
  font-size: 20px;
  list-style: none;
`;

export const ListChild = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;

  &:hover {
    color: orangered;
    /* letter-spacing: 0.1em; */
    transform-origin: left bottom;
    transform: scale(1.05);
    transition: 200ms linear;
  }
`;

export const LinkFilm = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 0.5em;
`;
