import React from 'react';
import styles from './Badge.module.css';

export default function Badge({
  children = 'Status',
  inlineStyle = {},
  theme = 'primary',
}) {
  return (
    <span
      className={`${styles.badge} ${styles[theme]}`}
      aria-label="status"
      style={inlineStyle}
    >
      {children}
    </span>
  );
}
