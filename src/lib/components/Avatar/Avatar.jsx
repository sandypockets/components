import React from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ inlineStyle, src, alt, size, util }) {
  return (
    <div>
      <img
        className={`
          ${styles.avatar}
          ${styles[size]}
          ${util}
        `}
        src={src}
        alt={alt}
        style={inlineStyle}
      />
    </div>
  );
}
