import exersises from '../../exercises';
import ImageListItem from '@mui/material/ImageListItem';
import sprite from '../../../../assets/sprite.svg';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

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
  ArrowSvgRunning,
  ContSpanRunning,
  NameContainer,
} from './ExercisesItem.styled';

const ExercisesItem = () => {
  const selectedCategory = useSelector((state) => state.category);
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  const filteredExercises = exersises.filter(
    (exercise) => exercise.bodyPart === selectedCategory
  );

  return (
    <div>
      {filteredExercises.map((exercis) => (
        <ImageListItem
          key={exercis._id.$oid}
          style={{ paddingBottom: isMobileScreen ? '20px' : '0' }}
        >
          <ContainerExIt>
            <ContainerWorkout>
              <Workout>WORKOUT</Workout>
              <Button>
                Start
                <ArrowSvgArrow width="16" height="16">
                  <use xlinkHref={sprite + '#icon-arrow'} />
                </ArrowSvgArrow>
              </Button>
            </ContainerWorkout>
            <NameContainer>
              <ContSpanRunning>
                <ArrowSvgRunning width="14" height="16">
                  <use xlinkHref={sprite + '#icon-running-figure'} />
                </ArrowSvgRunning>
              </ContSpanRunning>
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