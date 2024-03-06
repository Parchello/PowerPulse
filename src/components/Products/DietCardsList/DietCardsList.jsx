import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
import { ModalProducts } from '../ModalProducts/ModalProducts';
import {
  AddBtn,
  DietBlock,
  DietBlockContainer,
  DietInfoHeading,
  DietInfoItem,
  DietInfoList,
  DietInfoValue,
  DietName,
  DietNameBox,
  DietText,
  DietTextBox,
  RecomendBox,
  RecomendStatusCircle,
  RecommendStatusText,
} from './DietCardsList.styled';
import {
  AddButton,
  ButtonBox,
  CaloriesBox,
  CaloriesText,
  CaloriesValue,
  CancelBox,
  DietInputBox,
  DietNameText,
  GramsInput,
} from '../ModalProducts/ModalProducts.styled';

export const DietCardsList = () => {
  const [modalProductsIsOpen, setModalProductsIsOpen] = useState(false);

  return (
    <>
      <DietBlockContainer>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn onClick={() => setModalProductsIsOpen(true)}>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
        <DietBlock>
          <DietTextBox>
            <DietText>Diet</DietText>
          </DietTextBox>
          <RecomendBox>
            <RecomendStatusCircle></RecomendStatusCircle>
            <RecommendStatusText>Recommended</RecommendStatusText>
            <AddBtn>
              Add
              <svg width="16px" height="16px">
                <use xlinkHref={sprite + '#icon-red-raw'} />
              </svg>
            </AddBtn>
          </RecomendBox>
          <DietNameBox>
            <svg width="24px" height="24px">
              <use xlinkHref={sprite + '#icon-running-man'} />
            </svg>
            <DietName>Here will be name of diet</DietName>
          </DietNameBox>
          <DietInfoList>
            <DietInfoItem>
              <DietInfoHeading>Calories: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Category: </DietInfoHeading>
              <DietInfoValue>none</DietInfoValue>
            </DietInfoItem>
            <DietInfoItem>
              <DietInfoHeading>Weight: </DietInfoHeading>
              <DietInfoValue>0</DietInfoValue>
            </DietInfoItem>
          </DietInfoList>
        </DietBlock>
      </DietBlockContainer>
      <ModalProducts
        isOpen={modalProductsIsOpen}
        onClose={() => setModalProductsIsOpen(false)}
      >
        <DietInputBox>
          <DietNameText type="text" placeholder="Name of diet" readOnly />
          <GramsInput type="text" placeholder="grams" />
        </DietInputBox>

        <CaloriesBox>
          <CaloriesText>Calories:</CaloriesText>
          <CaloriesValue>00</CaloriesValue>
        </CaloriesBox>

        <ButtonBox>
          <AddButton onClick={() => setModalProductsIsOpen(false)}>
            Add to diary
          </AddButton>
          <CancelBox onClick={() => setModalProductsIsOpen(false)}>
            Cancel
          </CancelBox>
        </ButtonBox>
      </ModalProducts>
    </>
  );
};
