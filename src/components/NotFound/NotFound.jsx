import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import { ErrorTitle, ErrorText, ErrorButton, WrapperError, ErrorContainer,Icon } from "./NotFound.styled";

export const NotFound = () => {
    return (
<>
<ErrorContainer>
<Link to="/">
         <svg width="151px" height="17px">
                  <Icon xlinkHref={sprite + "#icon-Logo-1" } />
              </svg>
      </Link>
    <WrapperError>
<ErrorTitle>404</ErrorTitle>
<ErrorText>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</ErrorText>
<ErrorButton to="/">Go Home</ErrorButton>
</WrapperError>
</ErrorContainer>
</>
    );
}