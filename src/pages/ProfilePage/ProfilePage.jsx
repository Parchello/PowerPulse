import TitlePage from '../ProfilePage/TitlePage';
import UserForm from '../ProfilePage/UserForm';
// import Usercard from '../ProfilePage/UserCard';
import styled from 'styled-components';

const Section = styled.div`
  padding-top: 72px;
  padding-left: 96px;
  padding-right: 96px;
  padding-bottom: 44px;

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  //tablet

  @media screen and (min-width: 764px) and (max-width: 1439px) {
    padding-left: 32px;
    padding-right: 40px;
    padding-bottom: 54px;
  }
`;

const ProfilePage = () => {
  return (
    <>
      <Section>
        <TitlePage titleName="Profile Settings" />
        <UserForm />
        {/* <Usercard /> */}
      </Section>
    </>
  );
};

export default ProfilePage;
