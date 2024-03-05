import 'react-datepicker/dist/react-datepicker.css';
import StyledDatepicker from './StyledDatepicker';

const DaySwitch = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1>
        <b>Diary</b>
      </h1>

      <StyledDatepicker />
    </div>
  );
};

export default DaySwitch;
