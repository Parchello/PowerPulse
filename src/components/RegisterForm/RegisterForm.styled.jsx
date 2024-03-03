import {ErrorMessage, Field} from "formik";
import styled from "styled-components";

export const RegisterField = styled(Field)`
    border: 1px solid ${(p) => p.theme.colors.grey};
    border-radius: 12px;
    padding: 14px;
    width: 100%;
    height: 46px;
    background-color: transparent;
    transition: border-color ${(p) => p.theme.transition};

    &:hover,
    &:focus,
    &:active {
    border-color: ${(p) => p.theme.colors.orange};
    outline: none;
  }
`

export const RegisterErrorMessage = styled(ErrorMessage)`
    
`

export const Button = styled.button`
    border-radius: 12px;
    padding: 12px 40px;
    min-width: 136px;
    min-height: 42px;
    background-color: ${(p) => p.theme.colors.orange};
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    color: ${(p) => p.theme.colors.white};
    margin-top: 28px;
    transition: background-color ${(p) => p.theme.transition};

    &:hover,
    &:focus {
    background-color: ${(p) => p.theme.colors.orangeLight};
  }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Label = styled.label`
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.6);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    pointer-events: none;
`