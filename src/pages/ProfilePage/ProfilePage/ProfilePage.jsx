import TitlePage from '../Title/TitlePage';
import UserForm from '../UserForm/UserForm';
import Usercard from '../UserCard/UserCard';
import { Section } from '../ProfilePage/ProfilePage.Styled';

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
