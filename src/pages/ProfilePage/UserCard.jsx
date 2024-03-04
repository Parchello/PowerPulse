import styled from 'styled-components';

import sprite from '../../assets/sprite.svg';
import { LogOut } from '../../components/Header/LogOut/LogOut';
// import { Text } from '../../components/Header/LogOut/LogOutStyled';

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

const UserCard = styled.div`
  padding-left: 50px;
  width: 439px;
`;

const ListItem = styled.li`
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
`;

const ListText = styled.p`
  font-size: 12px;
  line-height: 18px;

  height: 16px;
  color: rgba(239, 237, 232, 0.8);
  margin-left: 4px;
`;

const ListNumbers = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #efede8;

  width: 64px;
  height: 32px;
`;

const DescrContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const ListUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 54px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;

  position: relative;
`;

const UserNameText = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #efede8;

  margin-bottom: 8px;
`;

const UserText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.5);
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const ImgCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  border: 1px solid #e6533c;
  background-color: rgba(48, 48, 48, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImgLabel = styled.label`
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

const UserImgInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

const Usercard = () => {
  return (
    <UserCard>
      <CardContainer>
        <ImgCircle>
          <img src=""></img>
          <svg width="102px" height="102px" fill="#EFEDE8">
            <use xlinkHref={sprite + '#icon-user'} />
          </svg>
        </ImgCircle>

        <UserImgLabel htmlFor="avatar">
          <UserImgInput id="avatar" name="avatar" type="file" />
          <svg width="20px" height="20px" fill="#E6533C">
            <use xlinkHref={sprite + '#icon-check-mark-4'} />
          </svg>
        </UserImgLabel>

        <UserNameText>User name</UserNameText>
        <UserText>User</UserText>
      </CardContainer>
      <ListUl>
        <ListItem>
          <DescrContainer>
            <svg width="20px" height="20px" fill="tomato">
              <use xlinkHref={sprite + '#icon-fluent_food-24-filled'}></use>
            </svg>
            <ListText>Daily calorie intake</ListText>
          </DescrContainer>
          <ListNumbers>0</ListNumbers>
        </ListItem>
        <ListItem>
          <DescrContainer>
            <svg width="20px" height="20px" fill="tomato">
              <use xlinkHref={sprite + '#icon-dumbbell'}></use>
            </svg>
            <ListText>Daily physical activity</ListText>
          </DescrContainer>

          <ListNumbers>0 min</ListNumbers>
        </ListItem>
      </ListUl>
      <Container>
        <svg width="24px" height="24px">
          <use xlinkHref={sprite + '#icon-icons'} />
        </svg>
        <p>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </Container>
      {/* <LogOutProf /> */}
    </UserCard>
  );
};

export default Usercard;
