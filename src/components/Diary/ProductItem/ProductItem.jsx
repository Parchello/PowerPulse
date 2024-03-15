import {
  BottomInf,
  LiItemProducts,
  ProductBottomInfo,
  ProductInfo,
  ProductInfoCategory,
  TitleName,
} from './ProductItem.styled';
import { Recommended } from '../Recommended/Recommended';
import { NotRecommended } from '../NotRecomended/NotRecommended';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { deleteProductDiaryById } from '../../../redux/diary/operations';
import { DelBtn } from '../DelBtn/DelBtn.styled';
import { SelectUser, Token } from '../../../redux/profile/selectors';

export const ProductItem = ({ prop }) => {
  const {
    calories,
    amount,
    productId: { _id, title, category, groupBloodNotAllowed },
  } = prop;

  const userInfo = useSelector(SelectUser);
  const initialDate = useSelector((state) => state.diary.initialDate);
  const dispatch = useDispatch();
  const token = useSelector(Token);

  return (
    <LiItemProducts>
      <div>
        <TitleName>Title</TitleName>
        <ProductInfo>{title}</ProductInfo>
      </div>
      <div>
        <TitleName>Category</TitleName>
        <ProductInfoCategory>{category}</ProductInfoCategory>
      </div>
      <BottomInf>
        <div>
          <TitleName>Calories</TitleName>
          <ProductBottomInfo>{calories}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Weight</TitleName>
          <ProductBottomInfo>{amount}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Recommend</TitleName>
          <ProductBottomInfo>
            {groupBloodNotAllowed[userInfo.blood - 1] ? (
              <NotRecommended />
            ) : (
              <Recommended />
            )}
          </ProductBottomInfo>
        </div>
        <DelBtn
          onClick={() =>
            dispatch(deleteProductDiaryById({ _id, date: initialDate, token }))
          }
        >
          <svg width={24} height={24}>
            <use xlinkHref={sprite + '#trash-03'}></use>
          </svg>
        </DelBtn>
      </BottomInf>
    </LiItemProducts>
  );
};

export default ProductItem;
