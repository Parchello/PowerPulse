import styled from 'styled-components';

export const InfoBlockList = styled.ul`
  max-width: 396px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 13px;
  flex-basis: calc((100% - 26px) / 2);
  justify-content: center;
  padding: 0 20px;
`;

export const UserInfoBlock = styled.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  width: 157px;
  height: 96px;
  background-color: rgba(239, 237, 232, 0.05);
  /* background-color: black; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  outline: 1px solid red;
`;

export const AimInfoBlock = styled.li`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  width: 157px;
  height: 96px;
  background-color: orange;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;
