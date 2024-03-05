import styled from 'styled-components';

// const LogOut = styled.p`
//   ${LogOutStyled}
// `;

// const LogOutProf = ({ color = '#EFEDE8' }) => {
//   return <LogOut stroke={color} />;
// };

// const Text = styled.p`
//   color: #efede8;
//   font-family: Roboto;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.28;

//   @media (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.5;
//   }
// `;

export const UserCard = styled.div`
  padding-left: 50px;
  width: 439px;
  position: relative;

  @media screen and (min-width: 375px) {
    padding-left: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 50px;
  }
`;

export const ListItem = styled.li`
  width: 214px;
  height: 108px;
  border-radius: 12px;
  background-color: #e6533c;

  padding-top: 15px;
  padding-left: 18px;
  padding-bottom: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // гумова
  @media screen and (min-width: 320px) {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    width: 214px;
  }
`;

export const ListText = styled.p`
  font-size: 12px;
  line-height: 18px;

  height: 16px;
  color: rgba(239, 237, 232, 0.8);
  margin-left: 4px;
`;

export const ListNumbers = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #efede8;

  width: 64px;
  height: 32px;

  @media screen and (min-width: 320px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const DescrContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const ListUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 54px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;

  position: relative;
`;

export const UserNameText = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #efede8;

  margin-bottom: 8px;
`;

export const UserText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.5);
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  @media screen and (min-width: 320px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    width: 439px;
  }
`;

export const ImgCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  border: 1px solid #e6533c;
  background-color: rgba(48, 48, 48, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImgLabel = styled.label`
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  position: relative;
  bottom: 20px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const UserImgInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

export const LogOutDiv = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 0;

  @media screen and (min-width: 320px) {
    margin-right: 20px;
  }
`;

export const TextDescr = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 320px) {
    width: 75%;
    text-align: justify;
  }
`;
