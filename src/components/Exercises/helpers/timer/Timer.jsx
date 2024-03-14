import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useDispatch, useSelector } from 'react-redux';
// import { timerPlay, timerTime } from '../../store';
import { useEffect, useRef } from 'react';
import {
  ButtonStartPause,
  ContaierTimerRutton,
  TimerContainer,
  Time,
  CaloriesBurn,
  CaloriesNumber,
} from '../modal/AddExercisesForm.styled';
import sprite from '../../../../assets/sprite.svg';
import {
  selectCalories,
  selectIsPlayed,
  selectPassTime,
  selectSelectedItem,
  selectTimer,
} from '../../../../redux/exercises/selectors';
import {
  setCalories,
  setIsPlayed,
  setPassTime,
  setTimer,
} from '../../../../redux/exercises/exercisesSlise';

const Timer = () => {
  const dispatch = useDispatch();
  const isPlay = useSelector(selectIsPlayed);
  const calories = useSelector(selectCalories);
  const timeTimer = useSelector(selectTimer);
  const passTime = useSelector(selectPassTime);
  const selectedItem = useSelector(selectSelectedItem);

  const { burnedCalories } = selectedItem;

  const progressRef = useRef(null);

  const toggleTimer = () => {
    dispatch(setIsPlayed(!isPlay));
  };

  const getProsseTime = (progress) => {
    progressRef.current = progress;
  };

  useEffect(() => {
    if (isPlay) {
      const intervalId = setInterval(() => {
        dispatch(setPassTime(passTime - 1));
        dispatch(setTimer(180 - passTime));
        const timeTimerinutes = timeTimer / 60;

        const calculatedCalories = Math.round(
          // * 30 додано для отримання швидкого результуту в модальному вікні
          (timeTimerinutes * burnedCalories * 30) / 180
        );
        dispatch(setCalories(calculatedCalories));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isPlay, dispatch, timeTimer, burnedCalories, passTime]);

  return (
    <TimerContainer>
      <Time>Time</Time>
      <ContaierTimerRutton>
        <CountdownCircleTimer
          isPlaying={isPlay}
          size={124}
          colors={'#e6533c'}
          strokeWidth={4}
          trailColor={'rgba(239, 237, 232, 0.1)'}
          colorsTime={[7, 5, 2, 0]}
          duration={180}
          onUpdate={(progress) => {
            getProsseTime(progress);
          }}
        >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return (
              <div>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            );
          }}
        </CountdownCircleTimer>
        <ButtonStartPause onClick={toggleTimer}>
          {isPlay ? (
            <svg width="10" height="12">
              <use xlinkHref={sprite + '#icon-pause'} />
            </svg>
          ) : (
            <svg width="14" height="14">
              <use xlinkHref={sprite + '#icon-play'} />
            </svg>
          )}
        </ButtonStartPause>
      </ContaierTimerRutton>
      <CaloriesBurn>
        Burned calories: <CaloriesNumber>{calories}</CaloriesNumber>
      </CaloriesBurn>
    </TimerContainer>
  );
};

export default Timer;
