import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 40px 20px 80px 20px; */
  margin: 0 auto;
  outline: 1px solid red;

  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    max-width: 1249px;
  }
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${(props) => props.theme.colors.white};
  /* margin-bottom: 20px; */
  margin: 0;
`;

export const NavContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    padding-bottom: 64px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.4);
  background: transparent;
  border: none;
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
