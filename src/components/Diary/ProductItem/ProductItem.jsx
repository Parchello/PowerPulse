import {
  BottomInf,
  LiItemProducts,
  ProductBottomInfo,
  ProductInfo,
  TitleName,
} from './ProductItem.styled';
// import { Recommended } from '../Recommended/Recommended';
// import { NotRecommended } from '../NotRecomended/NotRecommended';
import { useDispatch } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { deleteProductDiaryById } from '../../../redux/DiaryProducts/operations';

export const ProductItem = ({ prop }) => {
  const {
    productId: { _id, title, category, calories, weight },
  } = prop;

  const dispatch = useDispatch();
  const handleDelete = () => {
    const productInfo = {
      productId: _id,
      date: '09/03/2024',
      weight: weight,
      calories: calories,
    };

    dispatch(deleteProductDiaryById(productInfo));
  };
  console.log(prop);

  return (
    <LiItemProducts>
      <TitleName>Title</TitleName>
      <ProductInfo>{title}</ProductInfo>
      <TitleName>Category</TitleName>
      <ProductInfo>{category}</ProductInfo>
      <BottomInf>
        <div>
          <TitleName>Calories</TitleName>
          <ProductBottomInfo>{calories}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Weight</TitleName>
          <ProductBottomInfo>{weight}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Recommend</TitleName>
          <ProductBottomInfo>
            {/* {prop.notAllowed ? <NotRecommended /> : <Recommended />} */}
          </ProductBottomInfo>
        </div>
        <button onClick={() => handleDelete()}>
          <svg>
            <use xlinkHref={sprite + '#icon-red-raw'}></use>
          </svg>
        </button>
      </BottomInf>
    </LiItemProducts>
  );
};

export default ProductItem;
