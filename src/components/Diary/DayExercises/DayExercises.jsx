import { AddExerciseBtn, DairyExercisesField } from './DayExercises.styled';

const DayExercises = () => {
  return (
    <DairyExercisesField>
      <p>Exercises</p>
      <AddExerciseBtn href="#">Add exercise</AddExerciseBtn>
    </DairyExercisesField>
  );
};

export default DayExercises;
