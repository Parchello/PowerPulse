import {
  Form as FormikForm,
  Field as FormikField,
} from 'formik';
import styled from 'styled-components';
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
export const Field = styled(FormikField)`
  background-color: transparent;
  color: ${(p) => p.theme.colors.white};
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px 200px 14px 14px;
  width: 100%;
  height: 46px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${(p) => p.theme.colors.white};
    opacity: 30%;
  }
  transition: border-color ${(p) => p.theme.transition};
  &:hover {
    border-color: ${(p) => p.theme.colors.orange};
  }
  &.invalid {
    border-color: red;
  }
  &.valid {
    border-color: green;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 365px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
    height: 52px;
  }
`;
export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Button = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid black;
  display: block;
  background-color: ${(p) => p.theme.colors.orange};
  color: ${(p) => p.theme.colors.white};
  margin-top: 14px;
  margin-top: 14px;
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
    width: 182px;
    height: 56px;
    font-size: 20px;
    line-height: 120%;
    margin-top: 40px;
  }
`;
export const Title = styled.h1`
  // padding-top: 127px;
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    // padding-top: 189px;
    font-size: 32px;
    line-height: 138%;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    // padding-top: 200px;
  }
`;
export const Text = styled.h1`
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${(p) => p.theme.colors.white};
  opacity: 30%;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 32px;
  }
`;
export const Message = styled.span`
  font-size: 14px;
  color: red;
  display: flex;
`;
export const SuccessMessage = styled.span`
display: flex;
  font-size: 14px;
  color: green;
`;
export const BtnEye = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 25%;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EyeSvg = styled.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`;

export const GreenSvg = styled.svg`
  width: 21px;
  height: 21px;
`;

export const RedSvg = styled.svg`
  width: 15px;
  height: 15px;
`;

export const ErrorsMargin = styled.div`
  margin-top: 1px;
  position: absolute;

  @media screen and (min-width: 768px) {
    margin-top: 2px;
  }
`;