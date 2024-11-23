import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Example/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { size: { control: "radio" }, variant: { control: "radio" } },
  args: { size: "sm", variant: "default" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const White: Story = {
  args: {
    size: "sm",
    variant: "white",
  },
};
