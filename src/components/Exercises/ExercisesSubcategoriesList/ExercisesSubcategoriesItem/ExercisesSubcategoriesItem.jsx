import { useDispatch, useSelector } from 'react-redux';
import {
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
import { Grid, Pagination, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { useMediaQuery } from '@mui/material';

const ExercisesSubcategoriesItem = () => {
  const dispatch = useDispatch();
  const visibleExercises = useSelector(filteredCategory);
  const urlParams = useSelector(selectUrlParams);
  const isLoading = useSelector(selectIsLoading);

  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isTabletScreen = useMediaQuery('(max-width: 1439px)');

  const handleClick = (item) => {
    const { name } = item;
    dispatch(setCategory(name));
    dispatch(getAllExercises({ filter: urlParams, value: name }));
  };

  return (
    <div>
      {isLoading && <Loader />}

      <Swiper
        modules={[Navigation, Pagination, A11y, Grid]}
        spaceBetween={16}
        slidesPerView={isMobileScreen ? 1 : isTabletScreen ? 3 : 5}
        navigation
        grid={{
          rows: isMobileScreen ? 20 : isTabletScreen ? 3 : 2,
          columns: isMobileScreen ? 1 : isTabletScreen ? 3 : 2,
          fill: 'columns',
        }}
        pagination={{ clickable: true }}
      >
        {visibleExercises.map((item) => (
          <SwiperSlide
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExercisesSubcategoriesItem;
