import { Container } from './Welcome.styled';
import { MainTitle } from "./MainTitle/MainTitle"
import {Navigation } from "./Navigation/Navigation"
import { MainPageInfo } from '../MainPageInfo/MainPageInfo';
import { HeroLayout } from '../HeroLayout/HeroLayout'

export const Welcome = () => {
  return (
    <>
      <HeroLayout>
        <Container>
          <MainTitle />
          <Navigation />
          <MainPageInfo />
        </Container>
      </HeroLayout>
    </>
  );
};
