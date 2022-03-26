import React, { useState } from 'react';
import styles from './Modal.module.css';
import { Button } from '../../index';

export default function Modal({
  isOpen,
  setIsOpen,
  title = 'Are you sure?',
  children = 'This action cannot be undone.',
  theme = 'danger',
  primaryButtonOnClickHandler,
  secondaryButtonOnClickHandler,
  primaryButtonText = 'Delete',
  secondaryButtonText = 'Cancel',
  closeButtonAnimation = 'true',
}) {
  const [hasMouseOver, setHasMouseOver] = useState(false);

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setIsOpen(false);
    }
  }

  function handleClose() {
    setHasMouseOver(false);
    setIsOpen(false);
  }

  return (
    <div className={`${styles.modal} ${!isOpen && styles.closed}`}>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={handleKeyDown}
        className={styles.modalContent}
      >
        <button
          onMouseOver={() => {
            setHasMouseOver(true);
          }}
          onClick={handleClose}
          className={`${styles.closeButton} ${
            closeButtonAnimation && hasMouseOver && styles.closeButtonAnimation
          }`}
        >
          X
        </button>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.children}>{children}</p>
        <div className={styles.buttonContainer}>
          <Button
            onClickHandler={
              secondaryButtonOnClickHandler
                ? secondaryButtonOnClickHandler
                : handleClose
            }
            theme="secondary"
          >
            {secondaryButtonText}
          </Button>
          <Button
            theme={theme}
            inlineStyle={{ marginLeft: 5 }}
            onClickHandler={
              primaryButtonOnClickHandler
                ? primaryButtonOnClickHandler
                : handleClose
            }
          >
            {primaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
