import Slider from 'react-slick';
import filters from './filters.json';
import {
  ExercisesItem,
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
} from '../exercisesPage.styled.js';

import { settings } from '../slidersSetings/sliderSetings.jsx';

const ExercisesSubcategoriesItem = () => {
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
