import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 127px 20px 0px 20px; //check right values
    background-color: ${(p) => p.theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh; 
    width: 100%;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 117%;
    color: ${(p) => p.theme.colors.white};
`

export const Paragraph = styled.p`
    font-size: 14px;
    line-height: 129%;
    color: ${(p) => p.theme.colors.grey};
    margin-top: 14px;
    margin-bottom: 28px;
    max-width: 335px;
`

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