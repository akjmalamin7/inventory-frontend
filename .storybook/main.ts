import { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookViteConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    return mergeConfig(config, {
      define: {
        "process.env": {},
      },
    });
  },
};

export default config;
