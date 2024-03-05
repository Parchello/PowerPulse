import { InfoBlock } from './InfoBlock/InfoBlock';
import { DiaryExercises } from './DiaryExercise/DiaryExercise';
import { DiaryProducts } from './DiaryProducts/DiaryProducts';

const resFromBackend = [
  // {
  //   title: 'Bread Hercules grain',
  //   category: 'Flour',
  //   calories: 289,
  //   weight: 100,
  //   notAllowed: false,
  // },
  // {
  //   title: 'Rice semolina Garnets gluten-free',
  //   category: 'Cereals',
  //   calories: 340,
  //   weight: 100,
  //   notAllowed: false,
  // },
  // {
  //   title:
  //     'Rice semolina Garnets gluten-free Rice semolina Garnets gluten-free',
  //   category: 'Cereals',
  //   calories: 340,
  //   weight: 100,
  //   notAllowed: false,
  // },
  // {
  //   title: 'Venison stew Specia',
  //   category: 'Meat',
  //   calories: 81,
  //   weight: 100,
  //   notAllowed: true,
  // },
];

const resFromExeBackend = [
  // {
  //   id: 1,
  //   body_Part: 'Waist',
  //   equipment: 'Body weight',
  //   name: '3/4 sit-up',
  //   target: 'Abs',
  //   burnedCalories: 220,
  //   time: 60,
  // },
  // {
  //   id: 2,
  //   body_Part: 'Waist',
  //   equipment: 'Body weight',
  //   name: '3/4 sit-up',
  //   target: 'Abs',
  //   burnedCalories: 220,
  //   time: 60,
  // },
  // {
  //   id: 3,
  //   body_Part: 'Waist',
  //   equipment: 'Body weight',
  //   name: '3/4 sit-up',
  //   target: 'Abs',
  //   burnedCalories: 220,
  //   time: 60,
  // },
  // {
  //   id: 4,
  //   body_Part: 'Waist',
  //   equipment: 'Body weight Body weight Body weight vvBody weight',
  //   name: '3/4 sit-up',
  //   target: 'Abs',
  //   burnedCalories: 220,
  //   time: 60,
  // },
  // {
  //   id: 5,
  //   body_Part: 'Waist',
  //   equipment: 'Body weight',
  //   name: '3/4 sit-up',
  //   target: 'Abs',
  //   burnedCalories: 220,
  //   time: 60,
  // },
];

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
      <DiaryProducts dataProp={resFromBackend} />
      <DiaryExercises exeProp={resFromExeBackend} />
    </div>
  );
};

export default Diary;
