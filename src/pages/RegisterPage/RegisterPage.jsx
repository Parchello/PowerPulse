import { LinkToSignIn } from "../../components/SignUp/LinkToSignIn/LinkToSignIn";
import { RegisterForm } from "../../components/SignUp/RegisterForm/RegisterForm";
import { SignUpInfo } from "../../components/SignUp/SignUpInfo/SignUpInfo";
import { Container } from "./RegisterPage.styled";

const RegisterPage = () => {
  return <Container>
   <>
    <SignUpInfo/>
    <RegisterForm/>
    <LinkToSignIn/>
  </>
  </Container>
};

export default RegisterPage;
