import React from 'react';
import styles from './TextArea.module.css';

export default function TextArea({ name, label, state, setState }) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.container}>
        <textarea
          rows={4}
          name={name}
          id={`textarea--${name}`}
          className={styles.textArea}
          defaultValue={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
}
