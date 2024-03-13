import styled from 'styled-components';

export const AddFormContainer = styled.div`
  /* width: 694px;
  height: 550px;
  padding: 48px 32px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: #10100f; */
`;

export const ExercContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: block;
    margin-bottom: 0;
  }

  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ImgContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  position: relative;
  width: 270px;
  height: 226px;
`;

export const Img = styled.img`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;

export const ImageFon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(4, 4, 4, 0.2), rgba(4, 4, 4, 0.2));
  border-radius: 12px;
  mix-blend-mode: multiply; /* Змішує колір фону з коліром зображення */
`;

export const ListExerc = styled.ul`
  @media screen and (max-width: 767px) {
    width: 302px;
    height: 132px;
  }

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 344px;
  height: 148px;
`;

export const ItemExerc = styled.li`
  @media screen and (max-width: 767px) {
    width: 147px;
    height: 62px;
  }
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 12px 18px;
  width: 168px;
  height: 70px;
  background: rgba(239, 237, 232, 0.05);
`;

export const TextEl = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;

  color: ${(props) => props.theme.colors.white};
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ButtonContainerTimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TimerContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-bottom: 40px;
    margin-top: 14px;
  }
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 72px;
`;

export const Time = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.4;
  color: rgba(239, 237, 232, 0.4);
  margin-bottom: 4px;
`;

export const CaloriesBurn = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
`;

export const CaloriesNumber = styled.span`
  color: ${(props) => props.theme.colors.orange};
`;

// Timer style
export const ButtonStartPause = styled.button`
  width: 25px;
  height: 26px;
  background-color: ${(props) => props.theme.colors.orange};
  border: none;
  border-radius: 1px;

  margin-top: 14px;
  margin-bottom: 8px;

  transition: ${(props) => props.theme.transition};

  &:hover,
  :focus {
    background-color: ${(props) => props.theme.colors.orangeLight};
  }
`;

export const ContaierTimerRutton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// Timer style

export const AddDairyButton = styled.button`
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
  margin-top: 0;
  border-radius: 12px;
  width: 151px;
  height: 52px;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  border: none;
  transition: ${(props) => props.theme.transition};
  &:hover,
  :focus {
    background-color: ${(props) => props.theme.colors.orangeLight};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;
