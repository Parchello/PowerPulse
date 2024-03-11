import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderOfExerciseField = styled.div`
  display: flex;
`;

export const DairyExercisesField = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  /* display: flex; */
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;
  overflow: hidden;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`;
export const ExerciseBlock = styled.ul`
  padding: 16px 0;
  overflow: scroll;
  max-height: 808px;
`;

export const ExersLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${(props) => props.theme.colors.orange};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 8px;
`;

export const ExersTitle = styled.p`
  font-size: 14px;
  line-height: 129%;
  color: rgba(239, 237, 232, 0.5);
`;

export const ExersBtn = styled.div`
  margin-left: 16px;
  display: flex;
  gap: 8px;
  padding: 0;
  width: 49px;
  height: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${(props) => props.theme.colors.orange};
  background-color: rgba(255, 255, 255, 0);
  border: none;
`;
