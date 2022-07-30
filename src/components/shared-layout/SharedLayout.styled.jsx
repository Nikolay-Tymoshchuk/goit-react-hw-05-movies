import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px 40px;
  min-height: 100vh;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  background-color: #d9dae0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
