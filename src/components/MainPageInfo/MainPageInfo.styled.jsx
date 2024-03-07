import styled from 'styled-components';

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 70px;
  /* width: 335px; */

  @media screen and (min-width: 768px) {
    gap: 56px;
  }

  @media screen and (min-width: 1440px) {
    gap: 39px;
    width: 638px;

    margin-top: 184px;
  }
`;

// 350+ video tutorial
export const VideoTutorContainer = styled.div`
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

export const VideoCount = styled.p`
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

export const VideoCaption = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: ${(p) => p.theme.colors.grey};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const SvgVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.orangeLight};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const SvgVideo = styled.svg`
  width: 12px;
  height: 12px;
  padding-left: 2px;

  @media screen and (min-width: 768px) {
    padding-left: 5px;

    width: 20px;
    height: 20px;
  }
`;

// 500 cal
export const CalStatus = styled.div`
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

export const CalCount = styled.p`
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

export const CalCaption = styled.span`
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

export const SvgRunWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SvgRun = styled.svg`
  fill: ${(p) => p.theme.colors.white};
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
