import {
  BottomInf,
  ProductBottomInfo,
  ProductInfo,
  TitleName,
} from './ProductItem.styled';
import { Recommended } from '../Recommended/Recommended';
import { NotRecommended } from '../NotRecomended/NotRecommended';

export const ProductItem = ({ prop }) => {
  return (
    <li>
      <TitleName>Title</TitleName>
      <ProductInfo>{prop.title}</ProductInfo>
      <TitleName>Category</TitleName>
      <ProductInfo>{prop.category}</ProductInfo>
      <BottomInf>
        <div>
          <TitleName>Calories</TitleName>
          <ProductBottomInfo>{prop.calories}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Weight</TitleName>
          <ProductBottomInfo>{prop.weight}</ProductBottomInfo>
        </div>
        <div>
          <TitleName>Recommend</TitleName>
          <ProductBottomInfo>
            {prop.notAllowed ? <NotRecommended /> : <Recommended />}
          </ProductBottomInfo>
        </div>
      </BottomInf>
    </li>
  );
};

export default ProductItem;
