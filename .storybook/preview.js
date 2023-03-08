import { addDecorator } from '@storybook/react';
import { theme, CSSReset, ChakraProvider, Box } from '@chakra-ui/react';
import { withConsole } from '@storybook/addon-console';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};

// Story Book Version 5
// addDecorator((story) => (
//   <ChakraProvider theme={theme}>
//     <CSSReset />
//     <Box m={4}>{story()}</Box>{' '}
//   </ChakraProvider>
// ));

// Story Book Version 6
export const decorators = [
  (story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box m={4}>{story()}</Box>{' '}
    </ChakraProvider>
  ),
];
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
