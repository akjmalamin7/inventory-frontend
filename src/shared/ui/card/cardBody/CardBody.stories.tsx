import type { Meta, StoryObj } from "@storybook/react";
import CardBody from "./CardBody";

const meta: Meta<typeof CardBody> = {
  component: CardBody,
  title: "CardBody",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Card body",
  },
};
