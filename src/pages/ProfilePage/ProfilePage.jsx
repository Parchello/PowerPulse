import TitlePage from '../ProfilePage/TitlePage';
import UserForm from '../ProfilePage/UserForm';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 72px;
  margin-left: 96px;
  margin-bottom: 44px;

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }

  //tablet

  @media screen and (min-width: 764px) and (max-width: 1439px) {
    margin-left: 32px;
  }
`;

const ProfilePage = () => {
  return (
    <Section>
      <TitlePage titleName="Profile Settings" />
      <UserForm />
    </Section>
  );
};

export default ProfilePage;
