import React from 'react';
import Button from '../lib/components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => {
  return (
    <div>
      <Button theme="primary">Click me</Button>
    </div>
  );
};

export const Secondary = () => {
  return (
    <div>
      <Button theme="secondary">Click me</Button>
    </div>
  );
};

export const Success = () => {
  return (
    <div>
      <Button theme="success">Click me</Button>
    </div>
  );
};

export const Danger = () => {
  return (
    <div>
      <Button theme="danger">Click me</Button>
    </div>
  );
};

export const Warning = () => {
  return (
    <div>
      <Button theme="warning">Click me</Button>
    </div>
  );
};

export const AccessibilityLabel = () => {
  return (
    <div>
      <Button accessibilityLabel="Close">X</Button>
    </div>
  );
};

export const OverridingStyles = () => {
  return (
    <div>
      <Button inlineStyle={{ width: 500, height: 75 }}>Click me</Button>
    </div>
  );
};
