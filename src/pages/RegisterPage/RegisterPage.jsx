import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Container, Title, Paragraph, LinkText, SigninLink } from "./RegisterPage.styled";

const RegisterPage = () => {
  return <Container>
    <Title>Sign Up</Title>
    <Paragraph>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</Paragraph>
    <RegisterForm/>
    <LinkText>Already have an account? <SigninLink to="/login">Sign In</SigninLink></LinkText>
  </Container>
};

export default RegisterPage;
