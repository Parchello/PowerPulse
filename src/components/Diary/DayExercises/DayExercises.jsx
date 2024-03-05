import sprite from '../../../assets/sprite.svg';
import {
  DairyExercisesField,
  ExerciseBlock,
  ExersLink,
  ExersTitle,
} from './DayExercises.styled';

import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { NotFoundExercises } from '../NotFoundExercises/NotFoundExercises';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
//
export const ExercisesTable = (prop) => {
  const { exeProp } = prop;

  return (
    <DairyExercisesField>
      <ExersTitle>Exercises</ExersTitle>
      <ExersLink to="/exercises">Add exercise</ExersLink>
      <svg width="16px" height="16px">
        <use xlinkHref={sprite + '#icon-red-raw'} />
      </svg>
      {exeProp.length > 0 ? (
        <ExerciseBlock>
          {exeProp.map((i) => (
            <ExerciseItem key={i.id} prop={i} />
          ))}
        </ExerciseBlock>
      ) : (
        <PositionCorrectorDiv>
          <NotFoundExercises />
        </PositionCorrectorDiv>
      )}
    </DairyExercisesField>
  );
};

export default ExercisesTable;
