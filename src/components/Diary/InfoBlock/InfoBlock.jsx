import { AimInfoBlock, UserInfoBlock, InfoBlockList } from './InfoBlock.styled';

export const InfoBlock = ({ prop }) => {
  console.log(prop);
  return (
    <InfoBlockList>
      <AimInfoBlock>
        <p style={{ marginBottom: '0' }}>Daily calorie intake</p>
        <p style={{ marginBottom: '0' }}>
          <b>2200</b>
        </p>
      </AimInfoBlock>
      <AimInfoBlock>
        <p>Daily physical activity</p>
        <p>
          <b>110 min</b>
        </p>
      </AimInfoBlock>
      <UserInfoBlock>
        <p style={{ marginBottom: '0' }}>Calories consumed</p>
        <p style={{ marginBottom: '0' }}>
          <b>0</b>
        </p>
      </UserInfoBlock>
      <UserInfoBlock>
        <p style={{ marginBottom: '0' }}>Calories burned</p>
        <p style={{ marginBottom: '0' }}>
          <b>0</b>
        </p>
      </UserInfoBlock>
      <UserInfoBlock>
        <p style={{ marginBottom: '0' }}>Calories remaining</p>
        <p style={{ marginBottom: '0' }}>
          <b>1493</b>
        </p>
      </UserInfoBlock>
      <UserInfoBlock>
        <p style={{ marginBottom: '0' }}>Sports remaining</p>
        <p style={{ marginBottom: '0' }}>
          <b>85 min</b>
        </p>
      </UserInfoBlock>
      <p
        style={{
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '129%',
          color: 'rgba(239, 237, 232, 0.3)',
          width: '303px',
        }}
      >
        Record all your meals in the calorie diary every day. This will help you
        be aware of your nutrition and make informed choices.
      </p>
    </InfoBlockList>
  );
};

export default InfoBlock;
