import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
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
import { ModalProducts } from '../ModalProducts/ModalProducts';

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
      />
    </>
  );
};
