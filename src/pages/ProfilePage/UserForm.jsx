import styled from 'styled-components';
import { useFormik } from 'formik';

import sprite from '../../assets/sprite.svg';

const Form = styled.form`
  background-color: inherit;
`;

const InputLong = styled.input`
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

const InputShort = styled.input`
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

const Label = styled.label`
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

const Ul = styled.ul`
  background-color: inherit;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: calc(50% - 10px);
  }
`;

const UlLifeStyle = styled.ul`
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

const LiRadioBtn = styled.li`
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
`;

const LabelRadioBtn = styled.label`
  background-color: inherit;
  font-size: 16px;
  line-height: 24px;
  background-color: inherit;
  &:checked {
    background-color: #e6533c;
  }
  color: #efede8;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const InputRadioBtn = styled.input`
  background-color: transparent;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border: none;

  &:checked {
    background-color: #e6533c;
  }
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

const RadioBtnContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    gap: 20px;
    margin-top: 8px;
  }
`;

const NameEmailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 14px;
  //mobile

  @media screen and (min-width: 320px) and (max-width: 375px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const DataContainer = styled.div`
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

const DataContainerItem = styled.div`
  //   @media screen (min-width: 768px) and (max-width: 1439px) {
  //     width: calc(50% - 7px);
  //   }
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: calc(50% - 7px);
  }
`;

const FormBtn = styled.button`
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

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      height: '',
      currentWeight: '',
      desiredWeight: '',
      dateOfBirth: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <NameEmailContainer>
        <div>
          <Label htmlFor="name">Name</Label>
          <InputLong
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <InputLong
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
      </NameEmailContainer>
      <DataContainer>
        <DataContainerItem>
          <Label htmlFor="height">Height</Label>

          <InputShort
            id="height"
            name="height"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="currentWeight">Current Weight</Label>
          <InputShort
            id="currentWeight"
            name="currentWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
          />
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="desiredWeight">Desired Weight</Label>
          <InputShort
            id="desiredWeight"
            name="desiredWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
          />
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <InputShort
            id="dateOfBirth"
            name="dateOfBirth"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
        </DataContainerItem>
      </DataContainer>
      <Label htmlFor="blood"> Blood</Label>

      <RadioBtnContainer>
        <Ul id="blood">
          <LiRadioBtn>
            <svg width="24px" height="24px" fill="#636366">
              <use xlinkHref={sprite + '#icon--RadioButton'} />
            </svg>
            <InputRadioBtn
              name="blood"
              value="1"
              id="1"
              type="radio"
            ></InputRadioBtn>

            <LabelRadioBtn htmlFor="1">1</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="2"
              id="2"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="2">2</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="3"
              id="3"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="3">3</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="4"
              id="4"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="4">4</LabelRadioBtn>
          </LiRadioBtn>
        </Ul>

        <Ul>
          <LiRadioBtn>
            <InputRadioBtn
              id="female"
              name="gender"
              value="female"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="female">Female</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              type="radio"
              id="male"
              name="gender"
              value="male"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="male">Male</LabelRadioBtn>
          </LiRadioBtn>
        </Ul>
      </RadioBtnContainer>
      <UlLifeStyle>
        <LiRadioBtn>
          <InputRadioBtn
            id="Sedentary"
            name="lifeStyle"
            value="Sedentary"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Sedentary">
            Sedentary lifestyle (little or no physical activity)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="Light"
            name="lifeStyle"
            value="Light"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Light">
            Light activity (light exercises/sports 1-3 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="Moderately"
            name="lifeStyle"
            value="Moderately"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Moderately">
            Moderately active (moderate exercises/sports 3-5 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="VeryActive"
            name="lifeStyle"
            value="VeryActive"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="VeryActive">
            Very active (intense exercises/sports 6-7 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="ExtremelyActive"
            name="lifeStyle"
            value="ExtremelyActive"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="ExtremelyActive">
            Extremely active (very strenuous exercises/sports and physical work)
          </LabelRadioBtn>
        </LiRadioBtn>
      </UlLifeStyle>
      <FormBtn type="submit">Save</FormBtn>
    </Form>
  );
};

export default UserForm;
