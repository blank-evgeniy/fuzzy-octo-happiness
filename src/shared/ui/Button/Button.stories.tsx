import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button, { ButtonSize, ButtonTheme } from "./Button";

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

export const PrimarySizeS: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: "Button",
    size: ButtonSize.S,
  },
};

export const PrimarySizeM: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: "Button",
    size: ButtonSize.M,
  },
};

export const PrimarySizeL: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: "Button",
    size: ButtonSize.L,
  },
};

export const Secondary: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: "Button",
  },
};

export const InheritTheme: Story = {
  args: {
    theme: ButtonTheme.INHERIT,
    children: "Button",
  },
};

export const Square: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    square: true,
    children: "BT",
  },
};

export const SquareSizeS: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    square: true,
    children: "BT",
    size: ButtonSize.S,
  },
};

export const SquareSizeM: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    square: true,
    children: "BT",
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    square: true,
    children: "BT",
    size: ButtonSize.L,
  },
};
