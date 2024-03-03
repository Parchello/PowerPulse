import {ErrorMessage, Field} from "formik";
import styled from "styled-components";

export const RegisterField = styled(Field)`
    border: 1px solid ${(p) => p.theme.colors.grey};
    border-radius: 12px;
    padding: 14px;
    width: 335px;
    height: 46px;
    background-color: transparent;
`

export const RegisterErrorMessage = styled(ErrorMessage)`
    
`

export const Button = styled.button`
    border-radius: 12px;
    padding: 12px 40px;
    min-width: 136px;
    height: 42px;
    background-color: ${(p) => p.theme.colors.orange};
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    color: ${(p) => p.theme.colors.white};
    margin-top: 28px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const Label = styled.label`
    font-size: 16px;
    line-height: 150%;
    color: rgba(239, 237, 232, 0.6);
`