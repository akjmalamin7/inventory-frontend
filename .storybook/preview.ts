import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    env: {
      VITE_API_URL: process.env.VITE_API_URL,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
