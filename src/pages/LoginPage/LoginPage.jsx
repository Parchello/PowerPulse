import { SignInForm } from '../../components/SignIn/SignInForm/SignInForm';
import { LinkToSignUp } from '../../components/SignIn/LinkToSignUp/LinkToSignUp';
import {BackGround} from "../../components/SignIn/Background.styled";
import {ContainerPhoto} from "../../components/SignIn/SignInForm/ContainerPhoto/ContainerPhoto"


const LoginPage = () => {
  function handleSubmit() {}
  return (
    <>
    <BackGround>
        <SignInForm handleSubmit={handleSubmit} />
        <LinkToSignUp />
        <ContainerPhoto/>
        </BackGround>
    </>
  );
};

export default LoginPage;
