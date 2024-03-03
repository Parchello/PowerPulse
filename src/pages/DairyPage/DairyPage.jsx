import DairyExercises from '../../components/DairyExercise/DairyExercise';
import DairyProducts from '../../components/DairyProducts/DairyProducts';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

const DairyPage = () => {
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

export default DairyPage;
