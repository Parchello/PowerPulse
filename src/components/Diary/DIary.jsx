import { BlockInfo } from './BlockInfo.styled';
import DayDashboard from './DayDashboard/DayDashboard';
import DayExercises from './DayExercises/DayExercises';
import DayProducts from './DayProducts/DayProducts';
import DaySwitch from './DaySwitch/DaySwitch';
import { ProdExeBoxes } from './ProdExeBoxes.styled';
import { DiaryMainDiv } from './MainDiaryComponent/Diary.styled';
import { PageTitle, TitleDayBlock } from './Diary.styled';

const Diary = () => {
  return (
    <DiaryMainDiv>
      <TitleDayBlock>
        <PageTitle />
        <DaySwitch />
      </TitleDayBlock>
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
