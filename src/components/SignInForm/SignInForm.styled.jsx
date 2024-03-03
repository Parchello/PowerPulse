import {
    Form as FormikForm,
    Field as FormikField,
    ErrorMessage as FormikError,
  } from 'formik';
  import styled from 'styled-components';
  
  export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 320px;
  `;
  
  export const Field = styled(FormikField)`
    padding: 4px;
    font: inherit;
  `;
  
  export const FormGroup = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;
  
  export const ErrorMessage = styled(FormikError)`
    color: ${p => p.theme.colors.red};
    font-size: 14px;
  `;

  export const Button = styled.button `
  border-radius: 12px;
  border: 1px solid black;
  padding: 12px 40px;
  display: block;
  height: 100%;
  background-color: ${(p) => p.theme.colors.orange};
  color: ${(p) => p.theme.colors.white};

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: background-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }`