import { SignInForm } from '../../components/SignIn/SignInForm/SignInForm';
import { LinkToSignUp } from '../../components/SignIn/LinkToSignUp/LinkToSignUp';
import {Wrapper} from "../../components/SignIn/Wrapper.styled";
import {MainPageInfo} from  "../../components/MainPageInfo/MainPageInfo";
import {Container} from "../../components/Welcome/Welcome.styled";
import {PhotoHero} from "../../components/SignIn/SignInForm/PhotoHero/PhotoHero"


const LoginPage = () => {
  return (
    <>
    <PhotoHero>
      <Container>
        <Wrapper>
        <SignInForm />
        <LinkToSignUp />
        </Wrapper>
        <MainPageInfo/>
        </Container>
        </PhotoHero>
    </>
  );
};

export default LoginPage;
