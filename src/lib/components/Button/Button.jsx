import React from 'react';
import styles from './Button.module.css';

export default function Button({ inlineStyle, children, type }) {
  return (
    <button style={inlineStyle} className={`${styles.button} ${styles[type]}`}>
      {children}
    </button>
  );
}
