import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button, { ButtonTheme } from "./Button";

const meta = {
  title: "shared/Button",

  component: Button,

  parameters: {},

  tags: ["autodocs"],

  argTypes: {
    children: { control: "text" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: "Button",
  },
};
