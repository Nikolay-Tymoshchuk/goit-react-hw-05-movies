import styled from '@emotion/styled';

export const ImageBox = styled.div`
  width: 100px;
`;

export const Character = styled.p`
  font-size: 0.8rem;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 2rem;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
