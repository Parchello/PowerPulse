const resFromBackend = [
  {
    title: 'Bread Hercules grain',
    category: 'Flour',
    calories: 289,
    weight: 100,
    notAllowed: false,
  },
  {
    title: 'Rice semolina Garnets gluten-free',
    category: 'Cereals',
    calories: 340,
    weight: 100,
    notAllowed: false,
  },
  {
    title:
      'Rice semolina Garnets gluten-free Rice semolina Garnets gluten-free',
    category: 'Cereals',
    calories: 340,
    weight: 100,
    notAllowed: false,
  },
  {
    title: 'Venison stew Specia',
    category: 'Meat',
    calories: 81,
    weight: 100,
    notAllowed: true,
  },
];

const resFromExeBackend = [
  {
    id: 1,
    body_Part: 'Waist',
    equipment: 'Body weight',
    name: '3/4 sit-up',
    target: 'Abs',
    burnedCalories: 220,
    time: 60,
  },
  {
    id: 2,
    body_Part: 'Waist',
    equipment: 'Body weight',
    name: '3/4 sit-up',
    target: 'Abs',
    burnedCalories: 220,
    time: 60,
  },
  {
    id: 3,
    body_Part: 'Waist',
    equipment: 'Body weight',
    name: '3/4 sit-up',
    target: 'Abs',
    burnedCalories: 220,
    time: 60,
  },
  {
    id: 4,
    body_Part: 'Waist',
    equipment: 'Body weight Body weight Body weight vvBody weight',
    name: '3/4 sit-up',
    target: 'Abs',
    burnedCalories: 220,
    time: 60,
  },
  {
    id: 5,
    body_Part: 'Waist',
    equipment: 'Body weight',
    name: '3/4 sit-up',
    target: 'Abs',
    burnedCalories: 220,
    time: 60,
  },
];
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
      <DayProducts dataProp={resFromBackend} />
      <DayExercises exeProp={resFromExeBackend} />
    </div>
  );
};

export default Diary;
