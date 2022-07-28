import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &.active {
    color: orangered;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  box-shadow: 1px 5px 5px #b9b9b9;
  padding: 0.5em;
  padding-left: 2em;
  font-size: 20px;
`;

export const ListChild = styled.li`
  &:last-child {
    margin-left: 1rem;
  }
`;
