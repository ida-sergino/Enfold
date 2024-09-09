import type { Preview } from "@storybook/react";
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'default-background',
      values: [
        {
          name: 'default-background',
          value: '#FFFFFF', // Replace this with your desired background color
        },
      ],
    },
  },
};

export default preview;
