import TitlePage from '../../pages/ProfilePage/TitlePage';
import DayDashboard from './DayDashboard/DayDashboard';
import DayExercises from './DayExercises/DayExercises';
import DayProducts from './DayProducts/DayProducts';

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
      <TitlePage />
      <DayDashboard />
      <DayProducts />
      <DayExercises />
    </div>
  );
};

export default Diary;
