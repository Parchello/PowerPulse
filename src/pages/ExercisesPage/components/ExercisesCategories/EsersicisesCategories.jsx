// import { useDispatch } from 'react-redux';
import {
  CategoryList,
  CategoryExercises,
} from './ExercisesCategories.styled.js';
// import { filtersAction } from '../../../../redux/store.js';

const ExercisesCategories = () => {
  // const dispatch = useDispatch();

  return (
    <div>
      {/* <CategoryList>
        <li onClick={() => dispatch(filtersAction('Body parts'))}>
          <CategoryExercises>Body parts</CategoryExercises>
        </li>
        <li onClick={() => dispatch(filtersAction('Muscles'))}>
          <CategoryExercises>Muscles</CategoryExercises>
        </li>
        <li onClick={() => dispatch(filtersAction('Equipment'))}>
          <CategoryExercises>Equipment</CategoryExercises>
        </li>
      </CategoryList> */}

      <CategoryList>
        <li>
          <CategoryExercises>Body parts</CategoryExercises>
        </li>
        <li>
          <CategoryExercises>Muscles</CategoryExercises>
        </li>
        <li>
          <CategoryExercises>Equipment</CategoryExercises>
        </li>
      </CategoryList>
    </div>
  );
};

export default ExercisesCategories;
