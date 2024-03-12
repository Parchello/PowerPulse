import { useDispatch, useSelector } from 'react-redux';
import {
  CategoryList,
  CategoryExercises,
} from './ExercisesCategories.styled.jsx';
import { selectFilters } from '../../../redux/exercises/selectors.jsx';
import {
  setFilter,
  setUrlParams,
} from '../../../redux/exercises/exercisesSlise.jsx';

const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters);

  return (
    <div>
      <CategoryList>
        <li
          onClick={() => {
            dispatch(setUrlParams('bodyPart'));
            dispatch(setFilter('Body parts'));
          }}
        >
          <CategoryExercises
            className={selectedFilters === 'Body parts' ? 'current' : ''}
          >
            Body parts
          </CategoryExercises>
        </li>
        <li
          onClick={() => {
            dispatch(setUrlParams('target'));
            dispatch(setFilter('Muscles'));
          }}
        >
          <CategoryExercises
            className={selectedFilters === 'Muscles' ? 'current' : ''}
          >
            Muscles
          </CategoryExercises>
        </li>
        <li
          onClick={() => {
            dispatch(setUrlParams('equipment'));
            dispatch(setFilter('Equipment'));
          }}
        >
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
