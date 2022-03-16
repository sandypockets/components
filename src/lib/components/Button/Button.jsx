import React from 'react';
import styles from './Button.module.css';

export default function Button({
  type = 'button',
  inlineStyle = {},
  theme = 'primary',
  disabled = false,
  accessibilityLabel = '',
  loading = false,
  children = 'Click me',
  onClickHandler,
  onSubmitHandler,
}) {
  return (
    <button
      aria-label={accessibilityLabel}
      className={`${styles.button} ${styles[theme]}`}
      disabled={disabled}
      style={inlineStyle}
      type={type}
      onClick={onClickHandler}
      onSubmit={onSubmitHandler}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
