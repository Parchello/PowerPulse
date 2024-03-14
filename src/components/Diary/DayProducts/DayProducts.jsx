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
import { fetchDiaryProducts } from '../../../redux/diary/operations';
import { selectDiaryProducts } from '../../../redux/diary/selectors';
import { Token } from '../../../redux/profile/selectors';

export const ProductsTable = () => {
  const dispatch = useDispatch();
  const token = useSelector(Token);
  const date = '14/03/2024';

  const initialDate = useSelector((state) => state.diary.initialDate);

  const formatingDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const dateNow = formatingDate(initialDate);
  console.log('FFFFFFFF', dateNow);
  useEffect(() => {
    const request = {
      token,
      date: dateNow,
    };
    dispatch(fetchDiaryProducts(request));
  }, [dispatch, token, dateNow]);
  const products = useSelector(selectDiaryProducts);
  console.log('products: ', products);
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
            <ProductItem key={i._id} prop={i} />
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
