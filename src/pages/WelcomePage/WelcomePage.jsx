import { HeroLayout } from '../../components/HeroLayout/HeroLayout';
import sprite from '../../assets/sprite.svg';
import {
  Title,
  Container,
  VideoTutorContainer,
  CalStatus,
  CalCaption,
  CalCount,
  VideoCaption,
  VideoCount,
  SvgVideo,
  SvgRun,
  Outline,
  InfoHolder,
  NavContainer,
  SignUp,
  SignIn,
  SvgVideoWrapper,
  SvgRunWrapper,
} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <>
      <HeroLayout>
        <Container>
          <div>
            <Title>
              Transforming your body shape with Power Pulse
              <Outline>
                <use xlinkHref={sprite + '#icon-Line'}></use>
              </Outline>
            </Title>

            <NavContainer>
              <SignUp to="/register">Sign Up</SignUp>
              <SignIn to="/login">Sign In</SignIn>
            </NavContainer>
          </div>
          <InfoHolder>
            <VideoTutorContainer>
              <SvgVideoWrapper>
                <SvgVideo>
                  <use xlinkHref={sprite + '#icon-polygon'}></use>
                </SvgVideo>
              </SvgVideoWrapper>

              <div>
                <VideoCount>350+</VideoCount>
                <VideoCaption>Video tutorial</VideoCaption>
              </div>
            </VideoTutorContainer>
            <CalStatus>
              <SvgRunWrapper>
                <SvgRun>
                  <use xlinkHref={sprite + '#icon-running-figure'}></use>
                </SvgRun>
              </SvgRunWrapper>

              <div>
                <CalCount>
                  500 <CalCaption>cal</CalCaption>
                </CalCount>
              </div>
            </CalStatus>
          </InfoHolder>
        </Container>
      </HeroLayout>
    </>
  );
}
