import sprite from '../../../assets/sprite.svg';
import {
  DairyExercisesField,
  ExersLink,
  ExersTitle,
} from './DayExercises.styled';

const DayExercises = () => {
  return (
    <DairyExercisesField>
      <ExersTitle>Exercises</ExersTitle>

      <ExersLink to="/exercises">Add exercise</ExersLink>
      <svg width="16px" height="16px">
        <use xlinkHref={sprite + '#icon-red-raw'} />
      </svg>
    </DairyExercisesField>
  );
};

export default DayExercises;
