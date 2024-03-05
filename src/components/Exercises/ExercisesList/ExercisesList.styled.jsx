import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';

// видалити та огорутти в sharedLoyaut
export const Container = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1249px;
  }
`;
//

export const CustomImageList = styled(ImageList)({
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(239, 237, 232, 0.05)',
    border: '1px solid rgba(239, 237, 232, 0.2)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#e6533c',
    borderRadius: '4px',
  },
});
