import {
  CalCaption,
  CalCount,
  CalStatus,
  InfoHolder,
  SvgRun,
  SvgRunWrapper,
  SvgVideo,
  SvgVideoWrapper,
  VideoCaption,
  VideoCount,
  VideoTutorContainer,
} from './MainPageInfo.styled';
import sprite from '../../assets/sprite.svg';

export const MainPageInfo = () => {
  return (
    <>
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
    </>
  );
};
