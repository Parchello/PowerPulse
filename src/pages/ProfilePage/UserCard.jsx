import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logOut } from '../../redux/auth/operations.jsx';
import { Text } from '../../components/Header/LogOut/LogOut.Styled';
import { SelectUser } from '../../redux/profile/selectors.jsx';

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
  UserImg,
} from './UserCard.Styled.jsx';
import { patchAvatar } from '../../redux/profile/operations.jsx';

const Usercard = () => {
  const dispatch = useDispatch();
  const user = useSelector(SelectUser);

  // const user = useSelector(); //треба отримати дані про юзера зі стейту
  // const [avatar, setAvatar] = useState() //тут отримати доступ до частини де зберігатиметься посилання на аватар у юзера
  const [avatar, setAvatar] = useState();
  //далі тут буде зберігатись посилання на аватар і зберігатись в стейт

  //в срц в фігурних дужках завантажується аватар
  const userAvatar = <UserImg src={avatar} alt="User avatar" />;

  const defaultAvatar = (
    <svg width="102px" height="102px" fill="#EFEDE8">
      <use xlinkHref={sprite + '#icon-user'} />
    </svg>
  );

  //ф-ція обробник апдейта аватару
  const avatarFileHandler = (evt) => {
    const initialAvatar = evt.target.files[0];
    if (!initialAvatar) return;

    const object_URL = URL.createObjectURL(initialAvatar);

    //setAvatar(object_URL) //треба засетити аватарЮРЛ в редакс стейт
    setAvatar(object_URL);
    // console.log(object_URL);

    //далі описується логіка відправки аватару на клаудінарі
    //для цього треба функція. В поточній версії мейну її нема

    try {
      // dispatch(); //тут виклик ф-ції для відправки аватару на сервер
      dispatch(patchAvatar(initialAvatar));
    } catch (error) {
      console.log('Ooops, something went wrong. Try again', error);
    }
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserCard>
      <CardContainer>
        <ImgCircle>{avatar ? userAvatar : defaultAvatar}</ImgCircle>

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

        <UserNameText>{user.name}</UserNameText>
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
          <ListNumbers>{user.bmr || 0}</ListNumbers>
        </ListItem>
        <ListItem>
          <DescrContainer>
            <svg width="20px" height="20px" fill="tomato">
              <use xlinkHref={sprite + '#icon-dumbbell'}></use>
            </svg>
            <ListText>Daily physical activity</ListText>
          </DescrContainer>

          <ListNumbers>110 mins</ListNumbers>
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

      <LogOutDiv onClick={handleLogOut}>
        <Text as={Text}>Logout</Text>
        <svg width="20px" height="20px" stroke="#E6533C">
          <use xlinkHref={sprite + '#icon-logout'} />
        </svg>
      </LogOutDiv>
    </UserCard>
  );
};

export default Usercard;
