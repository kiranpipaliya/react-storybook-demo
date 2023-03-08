import React from 'react';

import Input from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
};

export const Small = () => <Input size='small' />;
Small.storyName = 'Small Input'; // Rename Story
export const Medium = () => <Input size='medium' />;
export const Large = () => <Input size='large' />;
