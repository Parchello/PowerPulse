import InfoBlock from '../InfoBlock/InfoBlock';
import DairyExercises from '../DiaryExercise/DiaryExercise';
import DairyProducts from '../DiaryProducts/DiaryProducts';

const Diary = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      <InfoBlock />
      <DairyProducts></DairyProducts>
      <DairyExercises></DairyExercises>
    </div>
  );
};

export default Diary;
