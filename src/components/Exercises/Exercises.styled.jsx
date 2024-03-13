import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 40px 20px 80px 20px; */
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    max-width: 1249px;
  }
`;

export const NavContainer = styled.div`
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    padding-bottom: 32px;
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 64px;
    margin-top: 0;
  }
`;

export const BackButton = styled.button`
  @media screen and (max-width: 767px) {
    margin-top: 10px;
    position: relative;
    top: 0;
  }
  position: absolute;
  top: 32px;
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.4);
  background: transparent;
  border: none;

  margin: 0;
  padding: 0;
`;

export const ArrowSvgBack = styled.svg`
  transform: rotate(180deg);
  stroke: ${(props) => props.theme.colors.grey};
`;

// export const ExercisesList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   @media screen and (min-width: 768px) {
//     /* display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//     gap: 32px 16px; */
//   }
// `;
