import sprite from '../../../assets/sprite.svg';
import {
  DiaryInfoContainer,
  DiaryWarningText,
  InfoBlockLabel,
  MainInfoBlock,
  SecondaryInfoBlock,
} from './DayDashboard.styled';

const DayDashboard = () => {
  return (
    <>
      <DiaryInfoContainer>
        <MainInfoBlock>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#icon-fluent_food'} />
          </svg>
          <InfoBlockLabel>Daily calorie intake</InfoBlockLabel>
          <p>2200</p>
        </MainInfoBlock>
        <MainInfoBlock>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#icon-dumbbell'} />
          </svg>
          <InfoBlockLabel>Daily physical activity</InfoBlockLabel>
          <p>110</p>
        </MainInfoBlock>
        <SecondaryInfoBlock>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#icon-apple'} />
          </svg>
          <InfoBlockLabel>Calories consumed</InfoBlockLabel>
          <p>110</p>
        </SecondaryInfoBlock>
        <SecondaryInfoBlock>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#icon-calories'} />
          </svg>
          <InfoBlockLabel>Calories burned</InfoBlockLabel>
          <p>110</p>
        </SecondaryInfoBlock>
        <SecondaryInfoBlock>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#icon-bubble'} />
          </svg>
          <InfoBlockLabel>Calories remaining</InfoBlockLabel>
          <p>110</p>
        </SecondaryInfoBlock>
        <SecondaryInfoBlock>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#icon-running-figure'} />
          </svg>
          <InfoBlockLabel>Sports remaining</InfoBlockLabel>
          <p>110</p>
        </SecondaryInfoBlock>
      </DiaryInfoContainer>
      <div>
        <svg width="24px" height="24px">
          <use xlinkHref={sprite + '#icon-icons'} />
        </svg>
        <DiaryWarningText>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </DiaryWarningText>
      </div>
    </>
  );
};

export default DayDashboard;
