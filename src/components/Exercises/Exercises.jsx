import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  NavContainer,
  ArrowSvgBack,
  BackButton,
} from './Exercises.styled.jsx';
import ExercisesCategories from './ExercisesCategories/EsersicisesCategories.jsx';
import ExercisesList from './ExercisesList/ExercisesList.jsx';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList.jsx';
import BasicModalWindow from './helpers/modal/BasicModalWindow.jsx';
import { useEffect } from 'react';
import AddPExerciseSuccess from './helpers/modal/AddPExerciseSuccess/AddPExerciseSuccess.jsx';
import {
  selectFilters,
  selectSelectedCategories,
} from '../../redux/exercises/selectors.jsx';
import { getFilterExercises } from '../../redux/exercises/operation.jsx';

import sprite from '../../assets/sprite.svg';
import TitlePage from './TitlePage/TitlePage.jsx';
import { setCategory } from '../../redux/exercises/exercisesSlise.jsx';

const Exercises = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  console.log(filters);

  const selectedCategory = useSelector(selectSelectedCategories);
  console.log(selectedCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getFilterExercises());
      } catch (error) {
        console.error(
          'Помилка при отриманні даних з getFilterExercises:',
          error
        );
      }
    };

    fetchData();
  }, [dispatch]);

  const handleButtonClick = () => {
    dispatch(setCategory());
  };

  return (
    <Container>
      {selectedCategory && (
        <BackButton type="button" onClick={handleButtonClick}>
          <ArrowSvgBack width="16" height="16">
            <use xlinkHref={sprite + '#icon-arrow'} />
          </ArrowSvgBack>
          Back
        </BackButton>
      )}
      <NavContainer>
        {selectedCategory ? <TitlePage category={filters} /> : <TitlePage />}

        <ExercisesCategories />
      </NavContainer>

      {selectedCategory ? <ExercisesList /> : <ExercisesSubcategoriesList />}
      <BasicModalWindow />
      <AddPExerciseSuccess />
    </Container>
  );
};

export default Exercises;
