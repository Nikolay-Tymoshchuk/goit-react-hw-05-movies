import styled from '@emotion/styled';

export const ImageBox = styled.div`
  width: 100px;
`;

export const Character = styled.p`
  font-size: 0.8rem;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 2rem;
`;

export const ListItem = styled.li`
  padding: 0.5em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1rem 0.7rem rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #dddddd;

  &:hover {
    filter: brightness(1.1);
    transition: 400ms;
  }
`;
