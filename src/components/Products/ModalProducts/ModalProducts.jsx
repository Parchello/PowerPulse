import sprite from '../../../assets/sprite.svg';
import {
  CloseBtn,
  Modal,
  ModalContent,
  ModalWrapper,
} from './ModalProducts.styled';

export const ModalProducts = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <Modal>
          <ModalWrapper>
            <ModalContent>
              <CloseBtn onClick={() => onClose()}>
                <svg width="16px" height="16px">
                  <use xlinkHref={sprite + '#icon-close'} />
                </svg>
              </CloseBtn>
              {children}
            </ModalContent>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};
