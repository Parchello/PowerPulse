import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 40px 20px 80px 20px; */
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
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

export const CategoryList = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 40px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }
`;

export const CategoryExercises = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(props) => props.theme.colors.grey};
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

export const ExercisesItem = styled.li`
  display: block;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 32px;
  }

  /* @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 3);
  } */
`;

export const ExerscisesItemContainer = styled.div`
  width: 335px;
  height: 206px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-color: #040404;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 224px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`;

export const BodyPart = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.white};

  margin-top: 81px;
  margin-bottom: 0;
`;

export const BodyPartCategory = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.grey};
  margin-top: 2px;
`;
