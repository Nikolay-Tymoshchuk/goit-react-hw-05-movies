import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #ff4500;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 2em;
  padding-left: 20px;
`;
