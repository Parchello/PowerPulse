import { Outline, Title } from "./MainTitle.styled";
import sprite from "../../../assets/sprite.svg"

export const MainTitle = () => {
  return (
    <>
      <Title>
        Transforming your body shape with Power Pulse
        <Outline>
          <use xlinkHref={sprite + '#icon-Line'}></use>
        </Outline>
      </Title>
    </>
  );
    
};
