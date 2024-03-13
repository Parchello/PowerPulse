import sprite from '../../../assets/sprite.svg';
import styled from 'styled-components';

export const Form = styled.form`
  background-color: inherit;

  @media screen and (min-width: 320px) {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    lign-items: flex-start;

    width: 60%;
  }
`;

export const InputLong = styled.input`
  background-color: inherit;
  color: #efede8;
  padding: 0;
  outline: none !important;
  display: block;
  width: 341px;
  height: 52px;
  border-radius: 12px;
  padding: 14px, 216px, 14px, 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-color: rgba(239, 237, 232, 0.3);
  text-indent: 14px;
  &:hover {
    border-color: #e6533c;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${(p) => p.theme.colors.white};
    opacity: 30%;
  }
`;

export const StyledInputLong = styled(InputLong)`
  ${({ error }) => error && 'border-color: red;'}
  ${({ success }) => success && 'border-color: green;'}
`;

export const InputShort = styled.input`
  background-color: inherit;

  display: block;
  border-radius: 12px;
  padding: 14px, 216px, 14px, 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-color: rgba(239, 237, 232, 0.3);

  color: #efede8;
  text-indent: 14px;

  width: 159px;
  height: 52px;

  &:focus {
    border: 1px solid #e6533c;
  }
  &:hover {
    border-color: #e6533c;
  }

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    height: 46px;
    width: 100%;
  }
  @media screen and (min-width: 375px) {
    width: 160px;
    height: 46px;
  }

  @media screen and (min-width: 1440px) {
    width: 168px;
    height: 52px;
  }
`;

export const StyldInputShort = styled(InputShort)`
  ${({ error }) => error && 'border-color: red;'}
  ${({ success }) => success && 'border-color: green;'}
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 18px;
  background-color: inherit;
  color: rgba(239, 237, 232, 0.5);
  margin-bottom: 8px;

  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
  }
`;

export const Ul = styled.ul`
  background-color: inherit;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    // width: calc(50% - 10px);
    width: 40%;

    gap: 4px;
  }
`;

export const UlLifeStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const LiRadioBtn = styled.li`
  background-color: inherit;
  display: flex;

  &:checked {
    background-color: #e6533c;
  }
  margin-right: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex: 1;
    margin-right: 0;
  }

  position: relative;
`;

// const LabelRadioBtn = styled.label`
//   background-color: transparent;

//   font-size: 16px;
//   line-height: 24px;

//   &:checked {
//     background-color: #e6533c;
//   }
//   color: #efede8;

//   @media screen and (min-width: 320px) and (max-width: 375px) {
//     font-size: 14px;
//     line-height: 18px;
//   }
// `;

// const LabelRadioBtn1 = styled.label`
//   background-color: transparent;
//   width: 50px;
//   height: 50px;
//   position: relative;

//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;

//   &checked {
//     color: tomato;
//   }
// `;

// const InputRadioBtn = styled.input`
//   background: url(${sprite + '#icon--RadioButton'}) no-repeat center;
//   border: 1px solid tomato;
//   margin-right: 8px;
//   width: 24px;
//   height: 24px;

//   &:checked {
//     background-color: #e6533c;
//   }
//   @media screen and (min-width: 320px) and (max-width: 375px) {
//     width: 20px;
//     height: 20px;
//   }
// `;
export const BloodLabel = styled(Label)`
  @media screen and (min-width: 320px) {
    margin-right: auto;
  }
`;

export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    gap: 70px;
    margin-top: 8px;

    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`;

export const NameEmailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 14px;
  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column;
    gap: 14px;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  @media screen and (min-width: 375px) {
    flex-direction: column;
    gap: 14px;
    justify-content: center;
    align-items: center;
    margin-left: 

    width: 100%;
  }

  @media screen and (min-width:768px){
    flex-direction:row;
  }

  @media screen and (min-width:1440px){
    align-items: flex-start;
  gap:14px;
 
  margin-bottom: 14px;
  margin-right:auto;
  
  }
`;

export const NameEmailContainerItem = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;

  @media screen (min-width: 768px) {
    flex-direction: row;

    flex-wrap: wrap;
    gap: 14px;

    margin-left: 0;
    margin-right: 0;
  }
  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 20px;
    margin-left: 20px;

    width: 100%;
  }
  @media screen and (min-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 20px;

    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const DataContainerItem = styled.div`
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: calc(50% - 7px);
  }
`;

export const FormBtn = styled.button`
  background: #e6533c;
  border: none;
  color: rgba(239, 237, 232, 0.6);
  border-radius: 12px;

  width: 144px;
  height: 56px;
  &:disabled {
    cursor: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 115px;
    height: 42px;
    margin-bottom: 44px;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const LabelRadioBtn = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 16px;
  line-height: 24px;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid #636366;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;

    @media screen and (min-width: 320px) {
      font-size: 14px;
      line-height: 18px;

      &::before {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
export const InputRadioBtn = styled.input`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:not(:disabled):active + ${LabelRadioBtn}::before {
    background-color: #ef8964;
    background-size: 50%;
    border-color: #ef8964;
  }

  &:focus + ${LabelRadioBtn}::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    stroke: #ef8964;
  }

  &:focus:not(:checked) + ${LabelRadioBtn}::before {
    // content: '';
    // background-image: url(${sprite + '#icon-1'});

    border: 1px solid #dddddd;
    background-color: #ffffff;
  }

  &:checked + ${LabelRadioBtn}::before {
    border-color: #ef8964;
    background-color: #ef8964;
    // background-size: 50%;
    // content: '';
    // background-image: url(${sprite + '#icon-1'});
  }

  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorDiv = styled.div`
  display: flex;
  gap: 4px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 18px;
  color: #d80027;
`;

export const SuccessDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 18px;
  color: #3cbf61;
`;
