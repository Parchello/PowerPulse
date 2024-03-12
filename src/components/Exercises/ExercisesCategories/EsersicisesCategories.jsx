import { useDispatch, useSelector } from 'react-redux';
import {
  CategoryList,
  CategoryExercises,
} from './ExercisesCategories.styled.jsx';
import { selectFilters } from '../../../redux/exercises/selectors.jsx';
import { setFilter } from '../../../redux/exercises/exercisesSlise.jsx';

const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters);

  return (
    <div>
      <CategoryList>
        <li onClick={() => dispatch(setFilter('Body part'))}>
          <CategoryExercises
            className={selectedFilters === 'Body part' ? 'current' : ''}
          >
            Body parts
          </CategoryExercises>
        </li>
        <li onClick={() => dispatch(setFilter('Muscles'))}>
          <CategoryExercises
            className={selectedFilters === 'Muscles' ? 'current' : ''}
          >
            Muscles
          </CategoryExercises>
        </li>
        <li onClick={() => dispatch(setFilter('Equipment'))}>
          <CategoryExercises
            className={selectedFilters === 'Equipment' ? 'current' : ''}
          >
            {' '}
            Equipment
          </CategoryExercises>
        </li>
      </CategoryList>
    </div>
  );
};

export default ExercisesCategories;
