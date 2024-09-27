import type { Meta, StoryObj } from "@storybook/react";

import Text, { TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",

  component: Text,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnlyText: Story = {
  args: {
    text: "Text",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
  args: {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OnlyTextDark: Story = {
  args: {
    text: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: "Title",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: "Title",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Default: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
