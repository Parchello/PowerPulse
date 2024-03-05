import TitlePage from '../../pages/ProfilePage/TitlePage';
import DayDashboard from './DayDashboard/DayDashboard';
import DayExercises from './DayExercises/DayExercises';
import DayProducts from './DayProducts/DayProducts';
import DaySwitch from './DaySwitch/DaySwitch';

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
      <DaySwitch />
      <DayDashboard />
      <DayProducts />
      <DayExercises />
    </div>
  );
};

export default Diary;
