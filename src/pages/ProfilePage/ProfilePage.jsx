import TitlePage from '../ProfilePage/TitlePage';
import UserForm from '../ProfilePage/UserForm';
import Usercard from '../ProfilePage/UserCard';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 320px) {
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
  //tablet

  @media screen and (min-width: 764px) and (max-width: 1439px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

const ProfilePage = () => {
  return (
    <>
      <TitlePage titleName="Profile Settings" />
      <Section>
        <UserForm />
        <Usercard />
      </Section>
    </>
  );
};

export default ProfilePage;
