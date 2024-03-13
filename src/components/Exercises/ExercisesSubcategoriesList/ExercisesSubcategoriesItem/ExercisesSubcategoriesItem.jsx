import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { settings } from '../../helpers/slidersSetings/sliderSetings.jsx';
import {
  ExercisesItem,
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
} from './ExercisesSubcategoriesItem.Styled.jsx';
import {
  filteredCategory,
  selectIsLoading,
  selectUrlParams,
} from '../../../../redux/exercises/selectors.jsx';

import { getAllExercises } from '../../../../redux/exercises/operation.jsx';
import { setCategory } from '../../../../redux/exercises/exercisesSlise.jsx';
import { Loader } from '../../../Loader/Loader.jsx';

const ExercisesSubcategoriesItem = () => {
  const dispatch = useDispatch();
  const visibleExercises = useSelector(filteredCategory);
  const urlParams = useSelector(selectUrlParams);
  const isLoading = useSelector(selectIsLoading);

  const handleClick = (item) => {
    const { name } = item;
    dispatch(setCategory(name));
    dispatch(getAllExercises({ filter: urlParams, value: name }));
  };

  return (
    <div>
      {isLoading && <Loader />}
      <Slider {...settings}>
        {visibleExercises.map((item) => (
          <ExercisesItem
            key={item._id}
            style={{ width: 100 }}
            onClick={() => handleClick(item)}
          >
            <ExerscisesItemContainer
              style={{
                backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${item.imgURL})`,
              }}
            >
              <BodyPart>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </BodyPart>
              <BodyPartCategory>{item.filter}</BodyPartCategory>
            </ExerscisesItemContainer>
          </ExercisesItem>
        ))}
      </Slider>
    </div>
  );
};

export default ExercisesSubcategoriesItem;
