import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Heading,
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

const Exercises = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const selectedCategory = useSelector(selectSelectedCategories);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await dispatch(getAllExercises());
  //     } catch (error) {
  //       console.error('Помилка при отриманні даних з getAllExercises:', error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

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

  return (
    <div>
      <Container>
        {filters && (
          <BackButton type="button">
            <ArrowSvgBack width="16" height="16">
              <use xlinkHref={sprite + '#icon-arrow'} />
            </ArrowSvgBack>
            Back
          </BackButton>
        )}
        <NavContainer>
          {filters ? (
            <Heading>{filters}</Heading>
          ) : (
            <Heading>Exercises</Heading>
          )}

          <ExercisesCategories />
        </NavContainer>

        {selectedCategory ? <ExercisesList /> : <ExercisesSubcategoriesList />}
      </Container>
      <BasicModalWindow />
      <AddPExerciseSuccess />
    </div>
  );
};

export default Exercises;
