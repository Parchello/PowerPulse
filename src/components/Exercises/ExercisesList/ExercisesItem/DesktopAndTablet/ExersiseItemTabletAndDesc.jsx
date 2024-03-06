import exersises from '../../../exercises';
import ImageListItem from '@mui/material/ImageListItem';
import { CustomImageList } from '../../ExercisesList.styled';
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
} from '../ExercisesItem.styled';
import sprite from '../../../../../assets/sprite.svg';

const ExercisesItemTabletAndDesctop = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isTabletScreen = useMediaQuery('(max-width: 1439px)');

  const selectedCategory = useSelector((state) => state.category);

  const filteredExercises = exersises.filter(
    (exercise) => exercise.bodyPart === selectedCategory
  );

  return (
    <div>
      <CustomImageList
        sx={{
          width: isTabletScreen ? 695 : 846,
          height: 487,
          overflowY: 'auto',
        }}
        cols={2}
        gap={(32, 16)}
        rowHeight={isTabletScreen ? 163 : 141}
        variant="quilted"
      >
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
      </CustomImageList>
    </div>
  );
};

export default ExercisesItemTabletAndDesctop;