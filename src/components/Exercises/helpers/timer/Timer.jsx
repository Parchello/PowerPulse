import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useDispatch, useSelector } from 'react-redux';
import { timerPlay, timerTime } from '../../store';
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

const Timer = () => {
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.isPlayed);
  const calories = useSelector((state) => state.calories);

  const progressRef = useRef(null);

  const toggleTimer = () => {
    dispatch(timerPlay(!isPlay));
  };

  useEffect(() => {
    if (!isPlay && progressRef.current !== null) {
      const timeExerc = 180 - progressRef.current;

      dispatch(timerTime(timeExerc));
    }
  }, [isPlay, dispatch]);

  const getProsseTime = (progress) => {
    progressRef.current = progress;
  };

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
