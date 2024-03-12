import sprite from '../../../assets/sprite.svg';
import {
  CloseBtn,
  Modal,
  ModalContent,
  ModalWrapper,
} from './ModaWellDone.styled';

export const ModalWellDone = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalWrapper onClick={onWrapperClick}>
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
