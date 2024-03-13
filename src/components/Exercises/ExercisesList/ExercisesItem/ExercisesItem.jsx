import ImageListItem from '@mui/material/ImageListItem';
import sprite from '../../../../assets/sprite.svg';
import { useMediaQuery } from '@mui/material';

import {
  ContainerExIt,
  Workout,
  Button,
  ExeName,
  ExeItem,
  SpanItem,
  ExerList,
  ContainerWorkout,
  ArrowSvgArrow,
  NameContainer,
} from './ExercisesItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectExercises,
  selectIsLoading,
} from '../../../../redux/exercises/selectors';
import {
  setFormModal,
  setSelectedId,
} from '../../../../redux/exercises/exercisesSlise';
import { Loader } from '../../../Loader/Loader';

const ExercisesItem = () => {
  const dispatch = useDispatch();
  const visibleExercise = useSelector(selectExercises);
  const isLoading = useSelector(selectIsLoading);

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      {isLoading && <Loader />}
      {visibleExercise.map((exercis) => (
        <ImageListItem
          key={exercis._id}
          style={{ paddingBottom: isMobileScreen ? '20px' : '0' }}
        >
          <ContainerExIt>
            <ContainerWorkout>
              <Workout>WORKOUT</Workout>
              <Button
                onClick={() => {
                  dispatch(setFormModal(true));
                  dispatch(setSelectedId(exercis));
                }}
              >
                Start
                <ArrowSvgArrow width="16" height="16">
                  <use xlinkHref={sprite + '#icon-arrow'} />
                </ArrowSvgArrow>
              </Button>
            </ContainerWorkout>
            <NameContainer>
              <span>
                <svg width="24px" height="24px">
                  <use xlinkHref={sprite + '#icon-running-man'} />
                </svg>
              </span>
              <ExeName>{exercis.name}</ExeName>
            </NameContainer>
            <ExerList>
              <ExeItem>
                Burned calories: <SpanItem>{exercis.burnedCalories}</SpanItem>
              </ExeItem>
              <ExeItem>
                Body part: <SpanItem>{exercis.bodyPart}</SpanItem>
              </ExeItem>
              <ExeItem>
                Target: <SpanItem>{exercis.target}</SpanItem>
              </ExeItem>
            </ExerList>
          </ContainerExIt>
        </ImageListItem>
      ))}
    </div>
  );
};

export default ExercisesItem;
