import sprite from '../../assets/sprite.svg';

import { Text } from '../../components/Header/LogOut/LogOut.Styled';

import {
  UserCard,
  ListItem,
  ListText,
  ListNumbers,
  DescrContainer,
  ListUl,
  CardContainer,
  UserNameText,
  UserText,
  Container,
  ImgCircle,
  UserImgLabel,
  UserImgInput,
  LogOutDiv,
  TextDescr,
} from './StyledUserCard';

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
        <svg
          width="34px"
          height="34px"
          style={{ width: '34px', height: '34px' }}
        >
          <use xlinkHref={sprite + '#icon-icons'} />
        </svg>
        <TextDescr>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </TextDescr>
      </Container>

      <LogOutDiv>
        <Text as={Text}>Logout</Text>
        <svg width="20px" height="20px" stroke="#E6533C">
          <use xlinkHref={sprite + '#icon-logout'} />
        </svg>
      </LogOutDiv>
    </UserCard>
  );
};

export default Usercard;
