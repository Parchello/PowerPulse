import {
  Container,
  Heading,
  NavContainer,
  ArrowSvgBack,
  BackButton,
} from './exercisesPage.styled.js';
import ExercisesCategories from './components/ExercisesCategories/EsersicisesCategories.jsx';
// import ExercisesItem from './components/ExercisesItem/ExercisesItem.jsx';
import sprite from '../../assets/sprite.svg';
import ExercisesSubcategoriesItem from './components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.jsx';
// import { Provider, useSelector } from 'react-redux';
// import { store } from '../../redux/store.js';

const ExercisesPage = () => {
  // const selectedExersis = useSelector((state) => state.filters);
  return (
    <div>
      {/* <Provider store={store}> */}
      <Container>
        {/* <BackButton type="button">
          <ArrowSvgBack width="16" height="16">
            <use xlinkHref={sprite + '#icon-arrow'} />
          </ArrowSvgBack>
          Back
        </BackButton> */}
        <NavContainer>
          {/* {selectedExersis ? (
            <Heading>{selectedExersis}</Heading>
          ) : (
            <Heading>Exercises</Heading>
          )} */}
          {/* забрати кли пос=чнем працювати зі store*/}
          <Heading>Exercises</Heading>
          <ExercisesCategories></ExercisesCategories>
        </NavContainer>

        {/* <ExercisesItem></ExercisesItem> */}
        <ExercisesSubcategoriesItem></ExercisesSubcategoriesItem>
      </Container>
      {/* </Provider> */}
    </div>
  );
};

export default ExercisesPage;
