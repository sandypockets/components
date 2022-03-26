import React, { useState } from 'react';
import Modal from '../lib/components/Modal/Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export function Basic() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open the modal</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Lorem ipsum">
        Sint id anim aliquip adipisicing qui aliqua.
      </Modal>
    </div>
  );
}
