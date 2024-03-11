import { NotFoundProducts } from '../NotFoundProducts/NotFoundProducts';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import { ProductItem } from '../ProductItem/ProductItem';
import {
  DairyProductsField,
  ListOfProducts,
  ProdLink,
} from './DayProducts.styled';

import sprite from '../../../assets/sprite.svg';
import { ExersTitle } from '../DayExercises/DayExercises.styled';
import { HeadOfField } from '../HeadOfField.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDiaryProducts } from '../../../redux/DiaryProducts/operations';
import { selectDiaryProducts } from '../../../redux/DiaryProducts/selectors';

export const ProductsTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiaryProducts());
  }, [dispatch]);
  const products = useSelector(selectDiaryProducts);
  return (
    <DairyProductsField>
      <HeadOfField>
        <ExersTitle>Products</ExersTitle>
        <ProdLink to="/products">Add Product</ProdLink>
        <svg width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-red-raw'} />
        </svg>
      </HeadOfField>
      {products.length > 0 ? (
        <ListOfProducts>
          {products.map((i) => (
            <ProductItem key={i.productId._id} prop={i} />
          ))}
        </ListOfProducts>
      ) : (
        <PositionCorrectorDiv>
          <NotFoundProducts />
        </PositionCorrectorDiv>
      )}
    </DairyProductsField>
  );
};

export default ProductsTable;

// import {
//   BottomInf,
//   LiItemProducts,
//   ProductBottomInfo,
//   ProductInfo,
//   TitleName,
// } from './ProductItem.styled';
// // import { Recommended } from '../Recommended/Recommended';
// // import { NotRecommended } from '../NotRecomended/NotRecommended';
// import { useDispatch } from 'react-redux';
// import sprite from '../../../assets/sprite.svg';
// import { deleteProductDiaryById } from '../../../redux/DiaryProducts/operations';

// export const ProductItem = ({ prop }) => {
//   const {
//     productId: { _id, title, category, calories, weight },
//   } = prop;

//   const dispatch = useDispatch();
//   const handleDelete = () => {
//     const productInfo = {
//       productId: _id,
//       date: '09/03/2024',
//       weight: weight,
//       calories: calories,
//     };

//     dispatch(deleteProductDiaryById(productInfo));
//   };
//   console.log(prop);

//   return (
//     <LiItemProducts>
//       <TitleName>Title</TitleName>
//       <ProductInfo>{title}</ProductInfo>
//       <TitleName>Category</TitleName>
//       <ProductInfo>{category}</ProductInfo>
//       <BottomInf>
//         <div>
//           <TitleName>Calories</TitleName>
//           <ProductBottomInfo>{calories}</ProductBottomInfo>
//         </div>
//         <div>
//           <TitleName>Weight</TitleName>
//           <ProductBottomInfo>{weight}</ProductBottomInfo>
//         </div>
//         <div>
//           <TitleName>Recommend</TitleName>
//           <ProductBottomInfo>
//             {/* {prop.notAllowed ? <NotRecommended /> : <Recommended />} */}
//           </ProductBottomInfo>
//         </div>
//         <button onClick={() => handleDelete()}>
//           <svg>
//             <use xlinkHref={sprite + '#icon-red-raw'}></use>
//           </svg>
//         </button>
//       </BottomInf>
//     </LiItemProducts>
//   );
// };

// export default ProductItem;
