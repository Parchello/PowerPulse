import styled from 'styled-components';

import xercisesImgDesctop1x from '../../../../assets/img/bg-exercisepage.jpg';
import xercisesImgDesctop2x from '../../../../assets/img/bg-exercisepage@2x.jpg';

export const Image = styled.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -5000;
    background-image: url(${xercisesImgDesctop1x});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    max-width: 1440px;
    margin-right: -96px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${xercisesImgDesctop2x});
  }
`;
