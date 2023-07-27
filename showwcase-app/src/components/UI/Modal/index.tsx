import React from 'react';
import Modal from 'react-modal';
import { ModalStyle, OverlayStyle } from 'src/components/UI/Modal/Modal.styled';

interface Props {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function modal({label, isOpen, children, onCloseModal}: Props) {
  return (
    <Modal
      className="_" //to prevent react-modal (custom content style)
      overlayClassName="_" //to prevent react-modal (custom overlay style)
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )} //from overriding the styles defined in contentElement
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )} //from overriding the styles defined in overlayElement
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onCloseModal}
    >
      <h3>{label}</h3>
      {children}
    </Modal>
  )
}
