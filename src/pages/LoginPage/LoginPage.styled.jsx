import styled from 'styled-components';
import heroMobile1x from '../../assets/heroImages/hero-mobile-1x-min.png';
import heroMobile2x from '../../assets/heroImages/hero-mobile-2x-min.png';
import herotablet1x from '../../assets/heroImages/hero-tablet-1x-min.png';
import herotablet2x from '../../assets/heroImages/hero-tablet-2x-min.png';
import herodescktop1x from '../../assets/heroImages/hero-descktop-1x-min.png';
import herodescktop2x from '../../assets/heroImages/hero-descktop-2x-min.png';


export const Wrapper = styled.div`
width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 66px;
  margin: 0 auto;

  background-color: rgba(0, 0, 0, 0.3);

  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;

    max-width: 1440px;
    padding-left: 96px;
    padding-right: 32px;
    padding-bottom: 171px;

    display: flex;
    gap: 76px;
  }`

  export const BackGround = styled.div`

  background-image: url(${heroMobile1x});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding-top: 61px;


  

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${herotablet1x});
    padding-top: 84px;
    width: 670px;
    height: 100vh;
    background-size: cover;
    


    

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${herotablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${herodescktop1x});

    background-size: 670px 800px;
    max-width: 1440px;
    padding-top: 200px;
    margin: 0 auto;


    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${herodescktop2x});
    }
  }
  `



export const ContainerSvg = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 70px;
margin-top: 121px;

@media screen and (min-width: 768px) {
  gap: 56px;
  margin-top: 135px;
}

@media screen and (min-width: 1440px) {
  gap: 39px;
  width: 638px;

  margin-top: 184px;
}
`;


export const TutorialContainer = styled.div`
border-radius: 12px;
background-color: #303030;
width: 146px;
height: 66px;
margin-right: 88px;

display: flex;
align-items: center;

gap: 8px;

padding: 14px 18px;

@media screen and (min-width: 768px) {
  padding: 20px 36px 20px 23px;
  width: 206px;
  height: 96px;
  gap: 12px;
  align-items: center;
  margin-right: 199px;
}

@media screen and (min-width: 1440px) {
  margin-right: 432px;
}
`;

export const Number = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 112%;
margin-bottom: 4px;

@media screen and (min-width: 768px) {
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 8px;
}
`;

export const Tutorial = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: ${(p) => p.theme.colors.grey};

@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 150%;
}
`;

export const Play = styled.svg`
display: block;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${(p) => p.theme.colors.orangeLight};

@media screen and (min-width: 768px) {
  width: 40px;
  height: 40px;
}
`;


export const Calculation = styled.div`
border-radius: 12px;
width: 119px;
height: 76px;

background-color: ${(p) => p.theme.colors.orangeLight};

padding: 14px 18px;

@media screen and (min-width: 768px) {
  padding: 14px 28px;
  width: 180px;
  height: 110px;
}
`;

export const Count = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 100%;
letter-spacing: -0.04em;
text-transform: uppercase;

@media screen and (min-width: 768px) {
  font-size: 48px;
  line-height: 104%;
  letter-spacing: -0.02em;
}
`;

export const Cal = styled.span`
font-size: 12px;
font-weight: 700;
line-height: 133%;
text-transform: lowercase;
margin-left: 8px;
color: ${(p) => p.theme.colors.grey};

@media screen and (min-width: 768px) {
  margin-left: 11px;
  font-size: 16px;
  line-height: 150%;
  margin-left: 11px;
}
`;

export const Run = styled.svg`
display: block;
width: 20px;
height: 20px;
margin-bottom: 4px;

border-radius: 50%;

background-color: ${(p) => p.theme.colors.beige};

@media screen and (min-width: 768px) {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}
`;