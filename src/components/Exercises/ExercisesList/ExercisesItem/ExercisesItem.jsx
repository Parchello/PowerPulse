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
import { useSelector } from 'react-redux';
import { selectExercisesItem } from '../../../../redux/exercises/selectors';

const ExercisesItem = ({ openModal }) => {
  const visibleExercise = useSelector(selectExercisesItem);
  console.log(visibleExercise);
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      {visibleExercise.map((exercis) => (
        <ImageListItem
          key={exercis._id.$oid}
          style={{ paddingBottom: isMobileScreen ? '20px' : '0' }}
        >
          <ContainerExIt>
            <ContainerWorkout>
              <Workout>WORKOUT</Workout>
              <Button onClick={() => openModal()}>
                Start
                <ArrowSvgArrow width="16" height="16">
                  <use xlinkHref={sprite + '#icon-arrow'} />
                </ArrowSvgArrow>
              </Button>
            </ContainerWorkout>
            <NameContainer>
              <span>
                {/* <ArrowSvgRunning width="14" height="16">
                  <use xlinkHref={sprite + '#icon-running-figure'} />
                </ArrowSvgRunning> */}
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
