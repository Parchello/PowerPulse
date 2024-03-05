import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DairyExercisesField = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px 105px 194px 105px;
  width: 335px;
  min-height: 335px;
  display: flex;
  padding: 16px;
`;

export const ExerciseBlock = styled.div`
  display: flex;
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
