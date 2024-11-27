import type { Meta, StoryObj } from "@storybook/react";
import CardFooter from "./CardFooter";

const meta: Meta<typeof CardFooter> = {
  component: CardFooter,
  title: "CardFooter",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Card footer",
  },
};
