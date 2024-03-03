import styled from 'styled-components';

import heroMobile1x from '../../assets/heroImages/hero-mobile-1x-min.png';
import heroMobile2x from '../../assets/heroImages/hero-mobile-2x-min.png';
import herotablet1x from '../../assets/heroImages/hero-tablet-1x-min.png';
import herotablet2x from '../../assets/heroImages/hero-tablet-2x-min.png';
import herodescktop1x from '../../assets/heroImages/hero-descktop-1x-min.png';
import herodescktop2x from '../../assets/heroImages/hero-descktop-2x-min.png';

export const HeroHolder = styled.div`
  background-image: url(${heroMobile1x});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 298px 571px;
  padding-top: 127px;

  margin: 0 auto;

  max-width: 375px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${herotablet1x});

    max-width: 768px;
    background-size: 437px 893px;
    padding-top: 189px;

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

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${herodescktop2x});
    }
  }
`;
