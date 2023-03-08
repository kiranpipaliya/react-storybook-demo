import React from 'react';
import Button from './Button';
import { Meta, Story } from '@storybook/react';
export default {
  title: 'Forms/Button',
  // component: Button, if Normal Approch
  args: {
    children: 'Button', // All this args Story Wil Be access
  },
} as Meta;

// Normal Way
export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

// Another Approch
/// Args Mechanism
const Template: Story = (args: any) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args', // hight pricidence
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary Args',
};

export const SuccessA = Template.bind({});
SuccessA.args = {
  variant: 'success',
  // children: 'Success Args',
};

/// Add ons

export const Log = () => <Button onClick={() => console.log('Button Cliked')}>Log</Button>;
