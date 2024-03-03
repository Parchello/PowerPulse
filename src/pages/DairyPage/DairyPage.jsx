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
      <DairyProducts>
        <div>
          <p>HALA MADRID!</p>
          <div style={{ width: '150px', height: '150px', color: 'red' }}></div>
        </div>
      </DairyProducts>
      <DairyExercises></DairyExercises>
    </div>
  );
};

export default DairyPage;
