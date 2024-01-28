'use client';
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

interface IModalBox {
  children: React.ReactNode;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
  size?: 'sm' | 'md' | 'lg';
}
const ModalBox = (props: IModalBox) => {
  const { children, toggle, setToggle, size } = props;

  return (
    <Modal
      size={size}
      isOpen={toggle}
      toggle={() => {
        setToggle!(!toggle);
      }}
      centered
    >
      <ModalBody className="text-center ">{children}</ModalBody>
    </Modal>
  );
};

export default ModalBox;
