import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &.active {
    color: #f00;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;
