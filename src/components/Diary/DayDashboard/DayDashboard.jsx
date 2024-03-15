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
  ExclamationMark,
  InfoBlockValue,
} from './DayDashboard.styled';
import { selectDayDashboard } from '../../../redux/diary/selectors';
import { useEffect } from 'react';
import { fetchDiaryDashboard } from '../../../redux/diary/operations';
import { SelectUser, Token } from '../../../redux/profile/selectors';
import { fetchCurrentUser } from '../../../redux/profile/operations';

const DayDashboard = () => {
  const dispatch = useDispatch();
  const dashboardInf = useSelector(selectDayDashboard);
  const token = useSelector(Token);
  const initialDate = useSelector((state) => state.diary.initialDate);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   const request = {
  //     token,
  //     date: initialDate,
  //   };

  //   dispatch(fetchDiaryDashboard(request));
  // }, [dispatch, initialDate, token, Calories, burnedCalories]);

  const {
    Calories,
    ExercisesTime,
    // amountAll,
    burnedCalories,
  } = dashboardInf;

  useEffect(() => {
    const request = {
      token,
      date: initialDate,
    };
    Calories, burnedCalories;

    dispatch(fetchDiaryDashboard(request));
  }, [dispatch, initialDate, token, Calories, burnedCalories]);

  {
    isNaN(Calories) ? 0 : Math.round(Calories);
  }
  {
    isNaN(Calories) ? 0 : Math.round(Calories);
  }

  console.log('Calories: ', Calories);

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
            {bmr !== undefined ? (
              <InfoBlockValue>{bmr}</InfoBlockValue>
            ) : (
              <InfoBlockValue>{0}</InfoBlockValue>
            )}
          </MainInfoBlock>
          <MainInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-dumbbell'} />
              </svg>
              <InfoBlockLabel>Daily physical activity</InfoBlockLabel>
            </DescrContainer>
            <InfoBlockValue>110 min</InfoBlockValue>
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
            {dashboardInf.Calories !== undefined ? (
              <InfoBlockValue>{Math.round(Calories)}</InfoBlockValue>
            ) : (
              <InfoBlockValue>0</InfoBlockValue>
            )}
          </SecondaryInfoBlock>
          <SecondaryInfoBlock>
            <DescrContainer>
              <svg width="12px" height="16px">
                <use xlinkHref={sprite + '#icon-calories'} />
              </svg>
              <InfoBlockLabel>Calories burned</InfoBlockLabel>
            </DescrContainer>
            {dashboardInf.burnedCalories !== undefined ? (
              <InfoBlockValue>{Math.round(burnedCalories)}</InfoBlockValue>
            ) : (
              <InfoBlockValue>0</InfoBlockValue>
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
              <InfoBlockValue>
                {Math.round(bmr - Calories + burnedCalories) || '0'}
              </InfoBlockValue>
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
              <InfoBlockValue>
                {Math.round(bmr - Calories + burnedCalories) || '0'}
              </InfoBlockValue>
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

              <InfoBlockValue>
                +{Math.abs(Math.round(110 - ExercisesTime / 60))}
              </InfoBlockValue>
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

              <InfoBlockValue>
                {Math.round(110 - ExercisesTime / 60) || '110m'}
              </InfoBlockValue>
            </SecondaryInfoBlock>
          )}
        </MainBlockOfSecondaryInfoBlock>
        <RememberText>
          <div>
            <ExclamationMark>
              <use xlinkHref={sprite + '#icon-icons'} />
            </ExclamationMark>
          </div>
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
