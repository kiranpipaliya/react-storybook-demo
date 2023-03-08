import React from 'react';
import { Button } from '@chakra-ui/react';
import { Story } from '@storybook/react';

export default {
  title: 'Chakra/Button',
  component: Button,
  args: { children: 'Button' },
  argTypes: {
    colorScheme: {
      options: ['gray', 'red', 'orange'],
      control: { type: 'select' },
    },

    onClick: { action: 'clicked' },
  },
};

const Template: Story = (args: any) => <Button {...args} />;

export const ChakraGreyButton = Template.bind({});

ChakraGreyButton.args = {
  colorScheme: 'gray',
};

export const ChakraRedButton = Template.bind({});

ChakraRedButton.args = {
  colorScheme: 'red',
};
export const ChakraOrangeButton = Template.bind({});

ChakraOrangeButton.args = {
  colorScheme: 'orange',
};

// export const ChakraGrayButton = () => <Button  colorScheme='gray'>Gray</Button>;
// export const ChakraRedButton = () => <Button colorScheme='red'>Red</Button>;
// export const ChakraOrangeButton = () => < Button colorScheme='orange'>Orange</>;
