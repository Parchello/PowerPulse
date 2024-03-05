import ExercisesItem from './ExercisesItem/ExercisesItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from './ExercisesList.styled';
import ExercisesItemTabletAndDesctop from './ExercisesItem/DesktopAndTablet/ExersiseItemTabletAndDesc';

const ExercisesList = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <ul>
      <Container>
        {isMobileScreen ? <ExercisesItem /> : <ExercisesItemTabletAndDesctop />}
      </Container>
    </ul>
  );
};

export default ExercisesList;
