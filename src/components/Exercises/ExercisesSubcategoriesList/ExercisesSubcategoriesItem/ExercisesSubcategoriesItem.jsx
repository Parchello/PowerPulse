import Slider from 'react-slick';
import filters from '../../filters.json';
import { clickCategory } from '../../store.js';
import { useDispatch, useSelector } from 'react-redux';
import { settings } from '../../helpers/slidersSetings/sliderSetings.jsx';
import {
  ExercisesItem,
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
} from './ExercisesSubcategoriesItem.Styled.js';

const ExercisesSubcategoriesItem = () => {
  const selectedExersis = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // const filteredData = filters.filter(
  //   (item) => item.filter === selectedExersis
  // );

  // для роботи без бекенду =>>>
  let filteredData;

  if (selectedExersis) {
    filteredData = filters.filter((item) => item.filter === selectedExersis);
  } else {
    filteredData = filters;
  }
  //=>>>

  return (
    <div>
      <Slider {...settings}>
        {filteredData.map((filter) => (
          <ExercisesItem
            key={filter._id.$oid}
            style={{ width: 100 }}
            onClick={() => dispatch(clickCategory(filter.name))}
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
