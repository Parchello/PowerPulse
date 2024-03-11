import sprite from '../../../assets/sprite.svg';
import { DescrContainer } from '../../../pages/ProfilePage/UserCard.Styled';
import {
  DiaryInfoContainer,
  DiaryWarningText,
  InfoBlockLabel,
  MainBlockOfMainInfoBlock,
  MainBlockOfSecondaryInfoBlock,
  MainInfoBlock,
  SecondaryInfoBlock,
  RememberText,
} from './DayDashboard.styled';

const DayDashboard = () => {
  return (
    <>
      <DiaryInfoContainer>
        <MainBlockOfMainInfoBlock>
          <MainInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-fluent_food'} />
              </svg>
              <InfoBlockLabel>Daily calorie intake</InfoBlockLabel>
            </DescrContainer>
            <p>2200</p>
          </MainInfoBlock>
          <MainInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-dumbbell'} />
              </svg>
              <InfoBlockLabel>Daily physical activity</InfoBlockLabel>
            </DescrContainer>
            <p>110</p>
          </MainInfoBlock>
        </MainBlockOfMainInfoBlock>
        <MainBlockOfSecondaryInfoBlock>
          <SecondaryInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-apple'} />
              </svg>
              <InfoBlockLabel>Calories consumed</InfoBlockLabel>
            </DescrContainer>
            <p>110</p>
          </SecondaryInfoBlock>
          <SecondaryInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-calories'} />
              </svg>
              <InfoBlockLabel>Calories burned</InfoBlockLabel>
            </DescrContainer>
            <p>110</p>
          </SecondaryInfoBlock>
          <SecondaryInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-bubble'} />
              </svg>
              <InfoBlockLabel>Calories remaining</InfoBlockLabel>
            </DescrContainer>
            <p>110</p>
          </SecondaryInfoBlock>
          <SecondaryInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-running-figure'} />
              </svg>
              <InfoBlockLabel>Sports remaining</InfoBlockLabel>
            </DescrContainer>
            <p>110</p>
          </SecondaryInfoBlock>
        </MainBlockOfSecondaryInfoBlock>
        <RememberText>
          <svg width="24px" height="24px">
            <use xlinkHref={sprite + '#icon-icons'} />
          </svg>
          <DiaryWarningText>
            Record all your meals in the calorie diary every day. This will help
            you be aware of your nutrition and make informed choices.
          </DiaryWarningText>
        </RememberText>
      </DiaryInfoContainer>
    </>
  );
};

export default DayDashboard;
