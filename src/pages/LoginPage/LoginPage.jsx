import { SignInForm } from '../../components/SignInForm/SignInForm';
import { LinkToSignUp } from '../../components/LinkToSignUp/LinkToSignUp';

const LoginPage = () => {
  function handleSubmit() {}
  return (
    <div>
      <SignInForm handleSubmit={handleSubmit} />
      <LinkToSignUp />
    </div>
  );
};

export default LoginPage;
