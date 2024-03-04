import exersises from '../exercises';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Container,
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
import sprite from '../../../../assets/sprite.svg';

const ExercisesItem = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <Container>
      <div>
        <ImageList
          sx={{ width: 686, height: 1000 }}
          gap={(32, 16)}
          cols={isMobileScreen ? '1' : '2'}
          rowHeight={163}
          variant="quilted"
        >
          {exersises.map((exercis) => (
            <ImageListItem key={exercis._id.$oid}>
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
                    Burned calories:{' '}
                    <SpanItem>{exercis.burnedCalories}</SpanItem>
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
        </ImageList>
      </div>
    </Container>
  );
};

export default ExercisesItem;
