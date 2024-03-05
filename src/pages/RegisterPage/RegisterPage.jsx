import { LinkToSignIn } from "../../components/SignUp/LinkToSignIn/LinkToSignIn";
import { RegisterForm } from "../../components/SignUp/RegisterForm/RegisterForm";
import { SignUpInfo } from "../../components/SignUp/SignUpInfo/SignUpInfo";
import { Container } from "../../components/SignUp/RegisterPage.styled";
import { HeroLayout } from "../../components/HeroLayout/HeroLayout";
import { MainPageInfo } from "../../components/MainPageInfo/MainPageInfo";

const RegisterPage = () => {
  return (
  <HeroLayout>
    <Container>
    <div>
      <SignUpInfo/>
      <RegisterForm/>
      <LinkToSignIn/>
    </div>
    <MainPageInfo/>
    </Container>
  </HeroLayout>
  ) 
};

export default RegisterPage;
