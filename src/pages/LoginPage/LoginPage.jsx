import { SignInForm } from "../../components/SignInForm/SignInForm";
import { LinkToSignUp } from "../../components/LinkToSignUp/LinkToSignUp";
import { Wrapper } from "./LoginPage.styled";
import { BackGround } from "./LoginPage.styled";
// import{
//   TutorialContainer,
//   Calculation,
//   Cal,
//   Count,
//   Tutorial,
//   Number,
//   Play,
//   Run,
//   ContainerSvg,
// } from './LoginPage.styled';



const LoginPage = () => {
  function handleSubmit () {};
  return ( <>
    <BackGround>
      <Wrapper>
    <SignInForm handleSubmit={handleSubmit}/>
  <LinkToSignUp/>
  {/* <ContainerSvg>
    <TutorialContainer>
          <Play>
                <use></use>
              </Play>
              <div>
                <Number>350+</Number>
                <Tutorial>Video tutorial</Tutorial>
              </div>
              </TutorialContainer>
              <Calculation>
              <Run width="30" height="30">
                <use></use>
              </Run>
              <div>
                <Count>
                  500 <Cal>cal</Cal>
                </Count>
              </div>
            </Calculation>
              </ContainerSvg> */}
  </Wrapper>
  </BackGround>
  </>);
};

export default LoginPage;
