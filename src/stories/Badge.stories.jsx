import React from 'react';
import Badge from '../lib/components/Badge/Badge';

export default {
  title: 'Badge',
  component: Badge,
};

export const Primary = () => {
  return (
    <div>
      <Badge theme="primary">Status</Badge>
    </div>
  );
};

export const Secondary = () => {
  return (
    <div>
      <Badge theme="secondary">Status</Badge>
    </div>
  );
};

export const Success = () => {
  return (
    <div>
      <Badge theme="success">Status</Badge>
    </div>
  );
};

export const Danger = () => {
  return (
    <div>
      <Badge theme="danger">Status</Badge>
    </div>
  );
};

export const Warning = () => {
  return (
    <div>
      <Badge theme="warning">Status</Badge>
    </div>
  );
};
