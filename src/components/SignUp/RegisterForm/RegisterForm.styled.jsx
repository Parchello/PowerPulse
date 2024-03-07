import { Field } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

// export const Label = styled.label`
//     font-size: 14px;
//     line-height: 1.29;
//     color: rgba(239, 237, 232, 0.6);
//     position: absolute;
//     top: 14px;
//     left: 14px;
//     pointer-events: none;
//     transition: transform ${(p) => p.theme.transition}, font-size ${(p) => p.theme.transition}, line-height ${(p) => p.theme.transition}, left ${(p) => p.theme.transition};

// @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.5;
// }
// `

export const RegisterField = styled(Field)`
  display: inline-block;
  border: 1px solid ${(p) => p.theme.colors.grey};
  border-radius: 12px;
  outline: none;
  padding: 14px;
  width: 100%;
  height: 46px;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.white};
  transition: border-color ${(p) => p.theme.transition};

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: rgba(239, 237, 232, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &.invalid {
    border-color: #d80027;
  }

  &.valid {
    border-color: #3cbf61;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-text-fill-color: ${(p) => p.theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${(p) => p.theme.colors.orange};

    /* &:focus { //-----------+label
        transform: translateY(-240%);
        font-size: 12px;
        line-height: 1.11;
        left: 0px;
        margin-top: 4px;
        margin-bottom: 4px;

        @media screen and (min-width: 768px) {
        transform: translateY(-200%);
        font-size: 14px;
        line-height: 1.29;
    }
    } */
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    width: 364px;
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  width: 136px;
  height: 42px;
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

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    width: 190px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
    margin-top: 64px;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  color: #d80027;
  display: flex;
  gap: 5px;
`;

export const SuccessMessage = styled.span`
  font-size: 14px;
  color: #3cbf61;
  display: flex;
  gap: 5px;
  position: absolute;
  left: -3px;
  width: 117px;
`;

export const ErrorsMargin = styled.div`
  /* margin-top: 4px; */
  position: absolute;
`;

export const SuccessSvg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const ErrorSvg = styled.svg`
  width: 15px;
  height: 15px;
`;
