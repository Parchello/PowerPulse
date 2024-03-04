import styled from "styled-components";
import { Link } from "react-router-dom";

// треба првильно вирівняти на декстоп та планшет
export const LinkText = styled.p`
    font-size: 12px;
    line-height: 150%;
    color: rgba(239, 237, 232, 0.6);
    margin-top: 12px;
`

export const SigninLink = styled(Link)`
    text-decoration: underline;
    color: ${(p) => p.theme.colors.white};
`