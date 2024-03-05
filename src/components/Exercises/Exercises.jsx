import { useSelector } from 'react-redux';
import {
  Container,
  Heading,
  NavContainer,
  // ArrowSvgBack,
  // BackButton,
} from './Exercises.styled.jsx';
import ExercisesCategories from './ExercisesCategories/EsersicisesCategories.jsx';
import ExercisesList from './ExercisesList/ExercisesList.jsx';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList.jsx';
// import sprite from '../../assets/sprite.svg';

const Exercises = () => {
  const selectedExersis = useSelector((state) => state.filters);
  const selectedCategory = useSelector((state) => state.category);
  console.log(selectedCategory);

  return (
    <div>
      <Container>
        {selectedExersis ? (
          <Heading>{selectedExersis}</Heading>
        ) : (
          <Heading>Exercises</Heading>
        )}
        <NavContainer>
          <ExercisesCategories />
        </NavContainer>

        {selectedCategory ? <ExercisesList /> : <ExercisesSubcategoriesList />}

        {/* <BackButton type="button">
          <ArrowSvgBack width="16" height="16">
            <use xlinkHref={sprite + '#icon-arrow'} />
          </ArrowSvgBack>
          Back
        </BackButton> */}
      </Container>
    </div>
  );
};

export default Exercises;
