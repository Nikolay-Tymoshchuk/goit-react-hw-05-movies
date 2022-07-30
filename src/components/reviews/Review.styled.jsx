import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0 20px;
`;

export const ImageBox = styled.div`
  width: 75px;
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  background-color: #707070;
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
  padding: 1em;
  margin-bottom: 4em;
  border-radius: 12px;
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 1);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Review = styled.p`
  text-indent: 2em;
  text-align: justify;
`;

export const NoReviewBox = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
`;
