import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { NotFoundExercises } from '../NotFoundExercises/NotFoundExercises';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import {
  AddExerciseBtn,
  DairyExercisesField,
  ExerciseBlock,
  HeaderOfExerciseField,
} from './DiaryExercise.styled';

export const DiaryExercises = (prop) => {
  const { exeProp } = prop;
  return (
    <DairyExercisesField>
      <HeaderOfExerciseField>
        <p>Exercises</p>
        <AddExerciseBtn href="#">Add exercise</AddExerciseBtn>
      </HeaderOfExerciseField>
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

export default DiaryExercises;
