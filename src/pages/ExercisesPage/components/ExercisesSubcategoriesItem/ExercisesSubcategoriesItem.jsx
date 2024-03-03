import Slider from 'react-slick';
import filters from '../filters.json';

import { settings } from '../../slidersSetings/sliderSetings.jsx';
import {
  ExercisesItem,
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
} from './ExercisesSubcategoriesItem.Styled.js';
// import { useSelector } from 'react-redux';

const ExercisesSubcategoriesItem = () => {
  // const selectedExersis = useSelector((state) => state.filters);

  // const filteredData = filters.filter(
  //   (item) => item.filter === selectedExersis
  // );

  //для роботи без бекенду
  // let filteredData;

  // if (selectedExersis) {
  //   filteredData = filters.filter((item) => item.filter === selectedExersis);
  // } else {
  //   filteredData = filters;
  // }
  //

  //  {filteredData.map((filter) => (

  return (
    <div>
      <Slider {...settings}>
        {filters.map((filter) => (
          <ExercisesItem key={filter._id.$oid} style={{ width: 100 }}>
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
