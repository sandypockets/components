import React, { useState } from 'react';
import { TextArea } from '../lib/components/TextArea/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
};

export function Basic() {
  const [text, setText] = useState('');

  return (
    <TextArea
      name="comment"
      label="Add a comment"
      state={text}
      setState={setText}
    />
  );
}
