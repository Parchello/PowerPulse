import ExercisesItem from './ExercisesItem/ExercisesItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from './ExercisesList.styled';
import ExercisesItemTabletAndDesctop from './ExercisesItem/DesktopAndTablet/ExersiseItemTabletAndDesc';

const ExercisesList = ({ openModal }) => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  return (
    <ul>
      <Container>
        {isMobileScreen ? (
          <ExercisesItem openModal={openModal} />
        ) : (
          <ExercisesItemTabletAndDesctop openModal={openModal} />
        )}
      </Container>
    </ul>
  );
};

export default ExercisesList;
