import type { Meta, StoryObj } from "@storybook/react";
import AvatarImg from "shared/assets/tests/storybook.jpg";
import Avatar from "./Avatar";

const meta = {
  title: "shared/Avatar",

  component: Avatar,

  parameters: {},

  tags: ["autodocs"],

  args: {
    src: AvatarImg,
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 128,
  },
};

export const Small: Story = {
  args: {
    size: 24,
  },
};
