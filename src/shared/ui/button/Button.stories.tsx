import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: { layout: "centered" },
  // argTypes: { disabled: { control: "boolean" } },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    // icon: <CalenderIcon />,
    children: "Default",
  },
};

export const White: Story = {
  args: {
    variant: "white",
    children: "White",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
};
export const Disable: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
