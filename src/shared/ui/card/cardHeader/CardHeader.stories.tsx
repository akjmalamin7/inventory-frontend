import type { Meta, StoryObj } from "@storybook/react";
import CardHeader from "./CardHeader";

const meta: Meta<typeof CardHeader> = {
  component: CardHeader,
  title: "CardHeader",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Card header",
  },
};
