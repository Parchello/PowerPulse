import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { settings } from '../../helpers/slidersSetings/sliderSetings.jsx';
import {
  ExercisesItem,
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
} from './ExercisesSubcategoriesItem.Styled.jsx';
import { filteredCategory } from '../../../../redux/exercises/selectors.jsx';

import { setCategory } from '../../../../redux/exercises/exercisesSlise.jsx';

const ExercisesSubcategoriesItem = () => {
  const dispatch = useDispatch();
  const visibleExercises = useSelector(filteredCategory);

  return (
    <div>
      <Slider {...settings}>
        {visibleExercises.map((filter) => (
          <ExercisesItem
            key={filter._id}
            style={{ width: 100 }}
            onClick={() => dispatch(setCategory(filter.name))}
          >
            <ExerscisesItemContainer
              style={{
                backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${filter.imgURL})`,
              }}
            >
              <BodyPart>
                {filter.name.charAt(0).toUpperCase() + filter.name.slice(1)}
              </BodyPart>
              <BodyPartCategory>{filter.filter}</BodyPartCategory>
            </ExerscisesItemContainer>
          </ExercisesItem>
        ))}
      </Slider>
    </div>
  );
};

export default ExercisesSubcategoriesItem;
