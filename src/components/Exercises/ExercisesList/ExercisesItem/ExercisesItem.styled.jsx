import styled from 'styled-components';
// import { ImageList as CustomImageList } from '@mui/material/ImageList';

export const ContainerCubCateg = styled.div``;

export const ExercisLi = styled.li`
  padding-bottom: 20px;
`;

export const ContainerExIt = styled.div`
  width: 335px;
  height: 100%;
  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const ContainerWorkout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;

export const Workout = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(props) => props.theme.colors.orange};
  background-color: transparent;
  border: none;
`;

export const ArrowSvgArrow = styled.svg`
  stroke: ${(props) => props.theme.colors.orange};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const ExeName = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.white};
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ExerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const ExeItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`;

export const SpanItem = styled.span`
  color: ${(props) => props.theme.colors.white};
  text-transform: capitalize;
`;
