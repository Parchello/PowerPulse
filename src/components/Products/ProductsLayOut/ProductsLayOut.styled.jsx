import styled from 'styled-components';

import productsImgDesctop1x from '../../../assets/img/bg-products.jpg';
import productsImgDesctop2x from '../../../assets/img/bg-products@2x.jpg';

export const BgImgHolder = styled.div`
  @media screen and (min-width: 1440px) {
    background-image: url(${productsImgDesctop1x});
    background-repeat: no-repeat;
    background-position: right;

    max-width: 1440px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${productsImgDesctop2x});
    }
  }
`;
