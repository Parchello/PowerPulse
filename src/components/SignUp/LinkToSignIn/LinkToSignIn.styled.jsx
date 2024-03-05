import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkText = styled.p`
    font-size: 12px;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0.6);
    margin-top: 12px;
    margin-bottom: 35px;
    
    @media screen and (min-width: 768px) {
    padding-left: 15px;
    margin-bottom: 39px;
  }
`

export const SigninLink = styled(Link)`
    text-decoration: underline;
    color: ${(p) => p.theme.colors.white};
`