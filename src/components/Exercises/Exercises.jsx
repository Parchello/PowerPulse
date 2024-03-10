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
import BasicModalWindow from './helpers/modal/BasicModalWindow.jsx';
import { useState } from 'react';
import AddPExerciseSuccess from './helpers/modal/AddPExerciseSuccess/AddPExerciseSuccess.jsx';

// import sprite from '../../assets/sprite.svg';

const Exercises = () => {
  const selectedExersis = useSelector((state) => state.filters);
  const selectedCategory = useSelector((state) => state.category);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenSucc, setIsOpenSucc] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log(selectedCategory);

  return (
    <div>
      <Container>
        <NavContainer>
          {selectedExersis ? (
            <Heading>{selectedExersis}</Heading>
          ) : (
            <Heading>Exercises</Heading>
          )}

          <ExercisesCategories />
        </NavContainer>

        {selectedCategory ? (
          <ExercisesList openModal={openModal} />
        ) : (
          <ExercisesSubcategoriesList />
        )}

        {/* <BackButton type="button">
          <ArrowSvgBack width="16" height="16">
            <use xlinkHref={sprite + '#icon-arrow'} />
          </ArrowSvgBack>
          Back
        </BackButton> */}
      </Container>
      <BasicModalWindow isOpen={modalIsOpen} closeModal={closeModal} />
      <AddPExerciseSuccess isOpen={modalIsOpenSucc} />
    </div>
  );
};

export default Exercises;
