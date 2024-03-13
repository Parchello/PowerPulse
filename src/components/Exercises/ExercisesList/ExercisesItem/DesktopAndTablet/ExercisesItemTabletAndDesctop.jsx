import ImageListItem from '@mui/material/ImageListItem';
import { CustomImageList } from '../../ExercisesList.styled';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
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
} from '../ExercisesItem.styled';
import sprite from '../../../../../assets/sprite.svg';
import BackgroundImg from '../../../helpers/backgroundImg/backgroundImg';
import { selectExercises } from '../../../../../redux/exercises/selectors';
import {
  setFormModal,
  setSelectedId,
} from '../../../../../redux/exercises/exercisesSlise';

export const ExercisesItemTabletAndDesctop = () => {
  const dispatch = useDispatch();
  const visibleExercise = useSelector(selectExercises);

  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isTabletScreen = useMediaQuery('(max-width: 1439px)');

  return (
    <div>
      <BackgroundImg />
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
      </CustomImageList>
    </div>
  );
};
