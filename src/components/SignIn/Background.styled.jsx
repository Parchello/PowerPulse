import styled from 'styled-components';
import heroMobile1x from '../../assets/heroImages/hero-mobile-1x-min.png';
import heroMobile2x from '../../assets/heroImages/hero-mobile-2x-min.png';
import herotablet1x from '../../assets/heroImages/hero-tablet-1x-min.png';
import herotablet2x from '../../assets/heroImages/hero-tablet-2x-min.png';
import herodescktop1x from '../../assets/heroImages/hero-descktop-1x-min.png';
import herodescktop2x from '../../assets/heroImages/hero-descktop-2x-min.png';

export const BackGround = styled.div`
  background-image: url(${heroMobile1x});

  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${herotablet1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${herotablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${herodescktop1x});

    background-size: contain;
    background-position: right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${herodescktop2x});
    }
  }
`;
