import sprite from '../../assets/sprite.svg';
import styled from 'styled-components';

export const Form = styled.form`
  background-color: inherit;
`;

export const InputLong = styled.input`
  background-color: inherit;
  padding: 0;
  outline: none !important;
  display: block;
  width: 341px;
  height: 52px;
  border-radius: 12px;
  padding: 14px, 216px, 14px, 14px;
  border: 1px, EFEDE8;
  border-color: EFEDE8;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
  }
`;

export const InputShort = styled.input`
  background-color: inherit;

  display: block;
  border-radius: 12px;
  padding: 14px, 216px, 14px, 14px;
  border: 1px, EFEDE8;
  border-color: EFEDE8;

  width: 159px;
  height: 52px;

  //mobile
  @media screen and (min-width: 320px) and (max-width: 375px) {
    height: 46px;
    width: 100%;
  }
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
    width: calc(50% - 10px);
  }
`;

export const UlLifeStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
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

export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    gap: 20px;
    margin-top: 8px;
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
    margin-bottom: 16px;
  }
  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: row;

    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 20px;
  }
`;

export const DataContainerItem = styled.div`
  //   @media screen (min-width: 768px) and (max-width: 1439px) {
  //     width: calc(50% - 7px);
  //   }
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: calc(50% - 7px);
  }
`;

export const FormBtn = styled.button`
  background: #e6533c;

  color: rgba(239, 237, 232, 0.6);
  border-radius: 12px;

  width: 144px;
  height: 56px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 115px;
    height: 42px;
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
`;
