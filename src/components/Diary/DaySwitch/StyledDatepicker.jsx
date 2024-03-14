import sprite from '../../../assets/sprite.svg';
import { forwardRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarButton,
  CalendarCont,
  CalendarGlobalStyles,
  TitleWrapper,
} from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { setInitialDate } from '../../../redux/diary/diaryReducer';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const initialDate = useSelector((state) => state.diary.initialDate);

  // console.log('new date', selectedDate);
  console.log('init', initialDate);
  const user = useSelector((state) => state.diary.dayDashboard);
  console.log('user', user);

  const dispatch = useDispatch();

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
      </TitleWrapper>
    );
  });

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    if (newDate >= new Date(user.createdAt)) {
      console.log('BTN regdate', new Date(user.createdAt));
      setSelectedDate(newDate);
      dispatch(setInitialDate(format(newDate, 'dd/MM/yyyy')));
    }
  };

  // format(new Date(2014, 1, 11), 'MM/dd/yyyy');

  const handleNextDay = () => {
    const newDate = selectedDate;
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
    dispatch(setInitialDate(format(newDate, 'dd/MM/yyyy')));
  };

  return (
    <>
      <CalendarCont>
        <DatePicker
          showIcon
          selected={selectedDate}
          minDate={user.createdAt}
          onChange={(date) => {
            setSelectedDate(date);
            dispatch(setInitialDate(format(date, 'dd/MM/yyyy')));
          }}
          customInput={<CustomInput />}
          dateFormat={'dd/MM/yyyy'}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substr(0, 1)}
        />
        <CalendarButton onClick={handlePrevDay}>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#chevron-left'} />
          </svg>
        </CalendarButton>
        <CalendarButton onClick={handleNextDay}>
          <svg width="12px" height="16px">
            <use xlinkHref={sprite + '#chevron-right'} />
          </svg>
        </CalendarButton>
      </CalendarCont>
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
