import { NavContainer, SignIn, SignUp } from "./Navigation.styled";

export const Navigation = () => {
    return (
      <>
        <NavContainer>
          <SignUp to="/register">Sign Up</SignUp>
          <SignIn to="/login">Sign In</SignIn>
        </NavContainer>
      </>
    );
}