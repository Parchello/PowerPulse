import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #efede8;
  margin-bottom: 58px;

  width: 223px;

  // mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    font-size: 24px;
    line-height: 28px;
    width: 168;
  }
`;

const TitlePage = (props) => {
  return <Title>{props.titleName}</Title>;
};

export default TitlePage;
