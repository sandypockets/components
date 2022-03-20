import React, { useState } from 'react';
import TextArea from '../lib/components/TextArea/TextArea';

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

export function TextAreaInlineStyle() {
  const [text, setText] = useState('');

  return (
    <div
      style={{
        backgroundColor: '#212121',
        height: '100vh',
        paddingTop: 25,
      }}
    >
      <TextArea
        name="comment"
        label="Add a comment"
        state={text}
        setState={setText}
        labelInlineStyle={{ marginLeft: 25, color: '#348c27' }}
        textAreaInlineStyle={{
          marginLeft: 25,
          backgroundColor: '#000000',
          outlineColor: '#60ff46',
          border: 'none',
          color: '#60ff46',
          fontFamily: 'Menlo',
        }}
      />
    </div>
  );
}
