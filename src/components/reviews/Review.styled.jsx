import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;

export const ImageBox = styled.div`
  width: 75px;
  display: inline-block;
`;

export const Author = styled.h5`
  margin: 0;
  margin-left: 1em;
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ListItem = styled.li`
  margin-bottom: 4em;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Review = styled.p`
  text-indent: 2em;
  text-align: justify;
`;
