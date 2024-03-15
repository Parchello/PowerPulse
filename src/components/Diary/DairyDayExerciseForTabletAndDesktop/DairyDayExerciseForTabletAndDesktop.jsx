import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { Token } from '../../../redux/profile/selectors';
import { DelBtn } from '../DelBtn/DelBtn.styled';
import { deleteExerciseById } from '../../../redux/diary/operations';
import sprite from '../../../assets/sprite.svg';
import { selectDiaryExercises } from '../../../redux/diary/selectors';
import { TitleName } from '../ExerciseItem/ExerciseItem.styled';

import {
  BottomInfFieldCaloriesTable,
  BottomInfFieldTargetTable,
  BottomInfFieldTimeTable,
  InfoBodyPartTable,
  InfoEquipTable,
  InfoNameTable,
} from './DairyDayExerciseForTabletAndDesktop.styled';

export default function TableExercise() {
  //   const userInfo = useSelector(SelectUser);
  const initialDate = useSelector((state) => state.diary.initialDate);
  const dispatch = useDispatch();
  const token = useSelector(Token);
  const exercise = useSelector(selectDiaryExercises);

  return (
    <TableContainer
      sx={{
        minWidth: 335,
        verticalAlign: 'text-top',
        overflowX: 'hidden',
        maxHeight: 264,
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '6px',
        },

        ' &::-webkit-scrollbar-track': {
          borderRadius: '12px',
        },

        ' &::-webkit-scrollbar-thumb': {
          borderRadius: '12px',

          background: 'rgba(239, 237, 232, 0.1)',
        },
      }}
    >
      <Table
        sx={{
          minWidth: 335,
          verticalAlign: 'text-top',
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              '& td, & th': {
                border: 0,
                color: 'orange',
                padding: '0 4px',
                width: '204px',
              },
            }}
          >
            <TableCell align="left">
              <TitleName>Body Part</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Equipment</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Name</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Target</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Burned Calories</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Time</TitleName>
            </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercise.map((exercise) => (
            <TableRow
              key={exercise.exerciseId._id}
              sx={{
                '& td, & th': {
                  border: 0,
                  color: 'white',
                  background: 'none',
                  padding: '0 4px',
                  verticalAlign: 'top',
                },
              }}
            >
              <TableCell component="th" scope="row">
                <InfoBodyPartTable>
                  {exercise.exerciseId.bodyPart}
                </InfoBodyPartTable>
              </TableCell>
              <TableCell component="th" scope="row">
                <InfoEquipTable>{exercise.exerciseId.equipment}</InfoEquipTable>
              </TableCell>
              <TableCell align="left">
                <InfoNameTable>{exercise.exerciseId.name}</InfoNameTable>
              </TableCell>
              <TableCell align="left">
                <BottomInfFieldTargetTable>
                  {exercise.exerciseId.target}
                </BottomInfFieldTargetTable>
              </TableCell>
              <TableCell align="left">
                <BottomInfFieldCaloriesTable>
                  {exercise.calories}
                </BottomInfFieldCaloriesTable>
              </TableCell>
              <TableCell align="left">
                <BottomInfFieldTimeTable>
                  {exercise.time}
                </BottomInfFieldTimeTable>
              </TableCell>
              <TableCell align="left">
                <DelBtn
                  onClick={() =>
                    dispatch(
                      deleteExerciseById({
                        _id: exercise.exerciseId._id,
                        date: initialDate,
                        token,
                      })
                    )
                  }
                >
                  <svg width={24} height={24}>
                    <use xlinkHref={sprite + '#trash-03'}></use>
                  </svg>
                </DelBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
