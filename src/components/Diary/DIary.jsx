import TitlePage from '../../pages/ProfilePage/TitlePage';
import { BlockInfo } from './BlockInfo.styled';
import DayDashboard from './DayDashboard/DayDashboard';
import DayExercises from './DayExercises/DayExercises';
import DayProducts from './DayProducts/DayProducts';
import DaySwitch from './DaySwitch/DaySwitch';
import { ProdExeBoxes } from './ProdExeBoxes.styled';
import { DiaryMainDiv } from './MainDiaryComponent/Diary.styled';

const Diary = () => {
  return (
    <DiaryMainDiv>
      <TitlePage />
      <DaySwitch />
      <BlockInfo>
        <DayDashboard />
        <ProdExeBoxes>
          <DayProducts />
          <DayExercises />
        </ProdExeBoxes>
      </BlockInfo>
    </DiaryMainDiv>
  );
};

export default Diary;
