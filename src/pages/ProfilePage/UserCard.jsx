import sprite from '../../assets/sprite.svg';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

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
  // const dispatch = useDispatch();

  // const user = useSelector(); //треба отримати дані про юзера зі стейту
  // const [avatar, setAvatar] = useState() //тут отримати доступ до частини де зберігатиметься посилання на аватар у юзера
  //далі тут буде зберігатись посилання на аватар і зберігатись в стейт

  //в срц в фігурних дужках завантажується аватар
  // const userAvatar = <img src="" alt="User avatar" />;

  const defaultAvatar = (
    <svg width="102px" height="102px" fill="#EFEDE8">
      <use xlinkHref={sprite + '#icon-user'} />
    </svg>
  );

  //ф-ція обробник апдейта аватару
  const avatarFileHandler = (evt) => {
    const avatar = evt.target.files[0];
    if (!avatar) return;

    const object_URL = URL.createObjectURL(avatar);

    //setAvatar(object_URL) //треба засетити аватарЮРЛ в редакс стейт

    console.log(object_URL);

    //далі описується логіка відправки аватару на клаудінарі
    //для цього треба функція. В поточній версії мейну її нема

    // try {
    // dispatch() //тут виклик ф-ції для відправки аватару на сервер
    // } catch (error) {
    // console.log('Ooops, something went wrong. Try again', error)
    // }
  };

  return (
    <UserCard>
      <CardContainer>
        <ImgCircle>{defaultAvatar}</ImgCircle>

        <UserImgLabel htmlFor="avatar">
          <UserImgInput
            id="avatar"
            name="avatar"
            type="file"
            onChange={avatarFileHandler}
          />
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
