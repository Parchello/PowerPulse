import { Container, LinkToSign, Question } from "./LinkToSignUp.styled";
export const LinkToSignUp = () => {
  return (
    <div>
      <Container>
      <Question>Don’t have an account?</Question>
      <LinkToSign to="/register"> Sign Up</LinkToSign>
      </Container>
    </div>
  );
};
