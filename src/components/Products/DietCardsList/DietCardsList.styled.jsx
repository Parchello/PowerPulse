import styled from 'styled-components';

export const DietBlockContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    overflow-y: auto;
    max-height: 500px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 12px;
      border: 1px solid rgba(239, 237, 232, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: ${(p) => p.theme.colors.orangeLight};
      height: 153px; // ця властивість не застосовується, хз чому.
    }
  }

  @media screen and (min-width: 1440px) {
    width: 845px;
  }
`;
