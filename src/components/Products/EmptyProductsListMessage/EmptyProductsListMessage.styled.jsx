import styled from 'styled-components';

export const EmptyListInfoBox = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    max-width: 580px;
  }
`;

export const EmptyListMessage = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 16px;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  & > span {
    color: ${(p) => p.theme.colors.orange};
  }
`;

export const AskToTry = styled.span`
  color: ${(p) => p.theme.colors.orange};
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
