import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  args: {
    size: "md",
    name: "John Doe",
    url: "",
    radius: "50%",
    onOk: () => console.log("Avatar clicked!"),
  },
};

export const WithImage: Story = {
  args: {
    size: "lg",
    name: "",
    url: "",
    radius: "",
  },
};
