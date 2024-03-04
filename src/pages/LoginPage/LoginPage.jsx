import { SignInForm } from '../../components/SignIn/SignInForm/SignInForm';
import { LinkToSignUp } from '../../components/SignIn/LinkToSignUp/LinkToSignUp';
import { Wrapper } from '../../components/SignIn/Wrapper.styled';

const LoginPage = () => {
  function handleSubmit() {}
  return (
    <>
      <Wrapper>
        <SignInForm handleSubmit={handleSubmit} />
        <LinkToSignUp />
      </Wrapper>
    </>
  );
};

export default LoginPage;
