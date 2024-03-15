import { LinkToSignIn } from '../../components/SignUp/LinkToSignIn/LinkToSignIn';
import { RegisterForm } from '../../components/SignUp/RegisterForm/RegisterForm';
import { SignUpInfo } from '../../components/SignUp/SignUpInfo/SignUpInfo';
import { Container } from '../../components/SignUp/RegisterPage.styled';
import { MainPageInfo } from '../../components/MainPageInfo/MainPageInfo';
import { PhotoHero } from '../../components/SignIn/SignInForm/PhotoHero/PhotoHero';

const RegisterPage = () => {
  return (
    <PhotoHero>
      <Container>
        <div>
          <SignUpInfo />
          <RegisterForm />
          <LinkToSignIn />
        </div>
        <MainPageInfo />
      </Container>
    </PhotoHero>
  );
};

export default RegisterPage;
