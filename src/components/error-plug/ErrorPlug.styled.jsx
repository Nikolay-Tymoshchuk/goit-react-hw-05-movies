import styled from '@emotion/styled';

export const ContentBox = styled.div`
  background-image: url('https://i.ibb.co/symbDMS/404.png');
  width: 100%;
  height: 440px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: -18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: inset 0px -30px 13px -20px #222222;
  text-align: center;
`;

export const TextContainer = styled.div`
  width: 600px;
`;

export const MainText = styled.p`
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const SubText = styled.p`
  font-size: 1.5em;
`;
