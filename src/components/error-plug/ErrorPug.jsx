import { ContentBox, TextContainer, MainText, SubText } from './ErrorPlug.styled';

const ErrorPlug = () => {
  return (
    <ContentBox>
      <TextContainer>
        <MainText>hey... don`t be sad</MainText>
        <SubText>
          It`s just a <b>404</b> Error!
        </SubText>
        <SubText>Looks like the page you are looking for is not exist.</SubText>
      </TextContainer>
    </ContentBox>
  );
};

export default ErrorPlug;
