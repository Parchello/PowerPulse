import { CategoryExercises, CategoryList } from '../exercisesPage.styled.js';

const ExercisesCategories = () => {
  return (
    <div>
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
