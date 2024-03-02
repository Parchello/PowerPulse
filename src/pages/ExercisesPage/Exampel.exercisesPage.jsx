import { Container, Heading, NavContainer } from './exercisesPage.styled.js';
import ExercisesCategories from './components/EsersicisesCategories.jsx';
import ExercisesSubcategoriesItem from './components/ExercisesSubcategoriesItem.jsx';

const ExercisesPage = () => {
  return (
    <div>
      <Container>
        <NavContainer>
          <Heading>Exercises</Heading>
          <ExercisesCategories></ExercisesCategories>
        </NavContainer>
        <ExercisesSubcategoriesItem></ExercisesSubcategoriesItem>
      </Container>
    </div>
  );
};

export default ExercisesPage;
