import { SignInForm } from '../../components/SignIn/SignInForm/SignInForm';
import { LinkToSignUp } from '../../components/SignIn/LinkToSignUp/LinkToSignUp';
import {BackGround} from "../../components/SignIn/Background.styled"

const LoginPage = () => {
  function handleSubmit() {}
  return (
    <>
    <BackGround>
        <SignInForm handleSubmit={handleSubmit} />
        <LinkToSignUp />
        </BackGround>
    </>
  );
};

export default LoginPage;
