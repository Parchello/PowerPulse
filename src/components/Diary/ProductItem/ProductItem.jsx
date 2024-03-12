import {
  BottomInf,
  LiItemProducts,
  ProductBottomInfo,
  ProductInfo,
  ProductInfoCategory,
  TitleName,
} from './ProductItem.styled';
// import { Recommended } from '../Recommended/Recommended';
// import { NotRecommended } from '../NotRecomended/NotRecommended';
import { useDispatch } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { deleteProductDiaryById } from '../../../redux/diary/operations';

export const ProductItem = ({ prop }) => {
  const {
    productId: { _id, title, category, calories, weight },
  } = prop;

  console.log(_id, title, category, calories, weight);

  const dispatch = useDispatch();

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
          <ProductBottomInfo>{weight}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Recommend</TitleName>
          <ProductBottomInfo>
            {/* {prop.notAllowed ? <NotRecommended /> : <Recommended />} */}
          </ProductBottomInfo>
        </div>
        <button
          onClick={() => dispatch(deleteProductDiaryById(_id))}
          style={{
            background: 'none',
            border: 'none',
            width: '24px',
            height: '24px',
            marginTop: 'auto',
          }}
        >
          <svg width={24} height={24}>
            <use xlinkHref={sprite + '#icon-red-raw'}></use>
          </svg>
        </button>
      </BottomInf>
    </LiItemProducts>
  );
};

export default ProductItem;
