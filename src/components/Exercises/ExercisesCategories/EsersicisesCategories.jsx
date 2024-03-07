import { useDispatch } from 'react-redux';
import {
  CategoryList,
  CategoryExercises,
} from './ExercisesCategories.styled.jsx';
import { filtersAction } from '../store.js';

const ExercisesCategories = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <CategoryList>
        <li onClick={() => dispatch(filtersAction('Body parts'))}>
          <CategoryExercises>Body parts</CategoryExercises>
        </li>
        <li onClick={() => dispatch(filtersAction('Muscles'))}>
          <CategoryExercises>Muscles</CategoryExercises>
        </li>
        <li onClick={() => dispatch(filtersAction('Equipment'))}>
          <CategoryExercises>Equipment</CategoryExercises>
        </li>
      </CategoryList>
    </div>
  );
};

export default ExercisesCategories;
