import { MainTitle, Outline } from "./Title.styled";
import sprite from "../../../assets/sprite.svg"

export const Title = () => {
    <MainTitle>
      Transforming your body shape with Power Pulse
      <Outline>
        <use xlinkHref={sprite + '#icon-Line'}></use>
      </Outline>
    </MainTitle>;
};
