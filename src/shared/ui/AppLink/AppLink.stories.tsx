import type { Meta, StoryObj } from "@storybook/react";

import AppLink, { AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/ApppLink",

  component: AppLink,

  parameters: {},

  tags: ["autodocs"],

  argTypes: {
    children: { control: "text" },
  },

  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: AppLinkTheme.DEFAULT,
    children: "Link",
  },
};

export const Button: Story = {
  args: {
    theme: AppLinkTheme.BUTTON,
    children: "Link",
  },
};
