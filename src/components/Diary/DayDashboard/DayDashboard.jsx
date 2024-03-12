import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { DescrContainer } from '../../../pages/ProfilePage/UserCard/UserCard.Styled';
import {
  DiaryInfoContainer,
  DiaryWarningText,
  InfoBlockLabel,
  MainBlockOfMainInfoBlock,
  MainBlockOfSecondaryInfoBlock,
  MainInfoBlock,
  SecondaryInfoBlock,
  RememberText,
  SecondaryInfoBlockMore,
  SecondaryInfoBlockMoreExercises,
} from './DayDashboard.styled';
import { selectDayDashboard } from '../../../redux/diary/selectors';
import { useEffect } from 'react';
import { fetchDiaryDashboard } from '../../../redux/diary/operations';
import { SelectUser, Token } from '../../../redux/profile/selectors';

const DayDashboard = () => {
  const dispatch = useDispatch();
  const dashboardInf = useSelector(selectDayDashboard);
  const token = useSelector(Token);
  const date = '13/03/2024';

  useEffect(() => {
    const request = {
      token,
      date,
    };
    dispatch(fetchDiaryDashboard(request));
  }, [dispatch, token]);

  const {
    Calories,
    ExercisesTime,
    // amountAll,
    burnedCalories,
  } = dashboardInf;

  const bmrInf = useSelector(SelectUser);
  const { bmr } = bmrInf;

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
            {bmr !== undefined ? <p>{bmr}</p> : <p>{0}</p>}
          </MainInfoBlock>
          <MainInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-dumbbell'} />
              </svg>
              <InfoBlockLabel>Daily physical activity</InfoBlockLabel>
            </DescrContainer>
            <p>
              {dashboardInf.ExercisesTime !== undefined ? (
                <p>110 min</p>
              ) : (
                <p>0</p>
              )}
            </p>
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
            {dashboardInf.Calories !== undefined ? <p>{Calories}</p> : <p>0</p>}
          </SecondaryInfoBlock>
          <SecondaryInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-calories'} />
              </svg>
              <InfoBlockLabel>Calories burned</InfoBlockLabel>
            </DescrContainer>
            {dashboardInf.burnedCalories !== undefined ? (
              <p>{burnedCalories}</p>
            ) : (
              <p>0</p>
            )}
          </SecondaryInfoBlock>
          {Calories > bmr ? (
            <SecondaryInfoBlockMore>
              <DescrContainer>
                <svg width="12px" height="16px">
                  <use xlinkHref={sprite + '#icon-bubble'} />
                </svg>
                <InfoBlockLabel>Calories remaining</InfoBlockLabel>
              </DescrContainer>
              {/* math and render by conditions */}
              <p>{bmr + Calories - burnedCalories}</p>
            </SecondaryInfoBlockMore>
          ) : (
            <SecondaryInfoBlock>
              <DescrContainer>
                <svg width="12px" height="16px">
                  <use xlinkHref={sprite + '#icon-bubble'} />
                </svg>
                <InfoBlockLabel>Calories remaining</InfoBlockLabel>
              </DescrContainer>
              {/* math and render by conditions */}
              <p>{bmr - Calories}</p>
            </SecondaryInfoBlock>
          )}
          {ExercisesTime > 110 ? (
            <SecondaryInfoBlockMoreExercises>
              <DescrContainer>
                <svg width="12px" height="16px">
                  <use xlinkHref={sprite + '#icon-running-figure'} />
                </svg>
                <InfoBlockLabel>Sports remaining</InfoBlockLabel>
              </DescrContainer>
              {/* math and render by conditions */}

              <p>+{Math.abs(110 - ExercisesTime)}</p>
            </SecondaryInfoBlockMoreExercises>
          ) : (
            <SecondaryInfoBlock>
              <DescrContainer>
                <svg width="12px" height="16px">
                  <use xlinkHref={sprite + '#icon-running-figure'} />
                </svg>
                <InfoBlockLabel>Sports remaining</InfoBlockLabel>
              </DescrContainer>
              {/* math and render by conditions */}

              <p>{110 - ExercisesTime}</p>
            </SecondaryInfoBlock>
          )}
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
