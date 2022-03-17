import React from 'react';
import styles from './AvatarGroup.module.css';
import Avatar from '../Avatar/Avatar';

export default function AvatarGroup({ children = {}, direction = 'row' }) {
  function calcMarginLeft(idx) {
    if (direction === 'row' && idx > 0) {
      return `-${idx * 50}%`;
    } else {
      return 0;
    }
  }

  return (
    <div className={styles[direction]}>
      {children.map((child, index) => (
        <div key={index}>
          <Avatar
            alt={child.props.alt}
            src={child.props.src}
            size={child.props.size}
            inlineStyle={{
              marginLeft: calcMarginLeft(index),
              zIndex: index * 100,
            }}
            util={styles.avatar}
          />
        </div>
      ))}
    </div>
  );
}
