import exersises from './exercises';
import ExercisesCategories from './EsersicisesCategories';
import {
  Container,
  ContainerExIt,
  ExercisLi,
  Workout,
  Button,
  ExeName,
  ExeItem,
  SpanItem,
  ExerList,
  ContainerWorkout,
  ArrowSvg,
} from './ExercisesItem.styled';
import sprite from '../../../assets/sprite.svg';

const ExercisesItem = () => {
  return (
    <Container>
      <ExercisesCategories></ExercisesCategories>
      <div>
        <ul>
          {exersises.map((exercis) => (
            <ExercisLi key={exercis._id.$oid}>
              <ContainerExIt>
                <ContainerWorkout>
                  <Workout>WORKOUT</Workout>
                  <div>
                    <Button>Start </Button>

                    <ArrowSvg width="16" height="16">
                      <use xlinkHref={sprite + '#icon-arrow'} />
                      {/* <use href="../../../assets/sprite.svg#icon-calories"></use> */}
                    </ArrowSvg>
                  </div>
                </ContainerWorkout>
                <ExeName>{exercis.name}</ExeName>
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
            </ExercisLi>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ExercisesItem;
