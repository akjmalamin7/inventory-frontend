import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Card component",
  },
};
