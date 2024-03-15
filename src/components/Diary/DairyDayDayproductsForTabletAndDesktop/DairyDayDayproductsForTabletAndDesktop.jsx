import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { SelectUser, Token } from '../../../redux/profile/selectors';
import { NotRecommended } from '../NotRecomended/NotRecommended';
import { Recommended } from '../Recommended/Recommended';
import { DelBtn } from '../DelBtn/DelBtn.styled';
import { deleteProductDiaryById } from '../../../redux/diary/operations';
import sprite from '../../../assets/sprite.svg';
import { selectDiaryProducts } from '../../../redux/diary/selectors';
import { TitleName } from '../ProductItem/ProductItem.styled';
import {
  ProductBottomInfoTable,
  ProductInfoCategoryTable,
  ProductInfoTable,
} from './DairyDayDayproductsForTabletAndDesktop.styled';

export default function TableProducts() {
  const userInfo = useSelector(SelectUser);
  const initialDate = useSelector((state) => state.diary.initialDate);
  const dispatch = useDispatch();
  const token = useSelector(Token);
  const product = useSelector(selectDiaryProducts);

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
              <TitleName>Title</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Category</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Calories</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Weight</TitleName>
            </TableCell>
            <TableCell align="left">
              <TitleName>Recommend</TitleName>
            </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((product) => (
            <TableRow
              key={product.productId._id}
              sx={{
                '& td, & th': {
                  border: 0,
                  color: 'white',
                  background: 'none',
                  padding: '0 4px',
                  verticalAlign: 'text-top',
                },
              }}
            >
              <TableCell component="th" scope="row">
                <ProductInfoTable>{product.productId.title}</ProductInfoTable>
              </TableCell>
              <TableCell align="left">
                <ProductInfoCategoryTable>
                  {product.productId.category}
                </ProductInfoCategoryTable>
              </TableCell>
              <TableCell align="left">
                <ProductBottomInfoTable>
                  {product.calories}
                </ProductBottomInfoTable>
              </TableCell>
              <TableCell align="left">
                <ProductBottomInfoTable>
                  {product.amount}
                </ProductBottomInfoTable>
              </TableCell>
              <TableCell align="left">
                <ProductBottomInfoTable>
                  {product.productId.groupBloodNotAllowed[
                    userInfo.blood - 1
                  ] ? (
                    <NotRecommended />
                  ) : (
                    <Recommended />
                  )}
                </ProductBottomInfoTable>
              </TableCell>
              <TableCell align="left">
                <DelBtn
                  onClick={() =>
                    dispatch(
                      deleteProductDiaryById({
                        _id: product.productId._id,
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
