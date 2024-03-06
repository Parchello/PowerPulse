import sprite from '../../../assets/sprite.svg';
import {
  CloseBtn,
  Modal,
  ModalContent,
  ModalWrapper,
} from './ModalProducts.styled';

export const ModalProducts = () => {
  return (
    <Modal>
      <ModalWrapper>
        <ModalContent>
          <CloseBtn>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </CloseBtn>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};
