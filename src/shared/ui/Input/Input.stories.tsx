import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import Input from "./Input";

const meta = {
  title: "shared/Input",

  component: Input,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    placeholder: "Input",
  },
  decorators: ThemeDecorator(Theme.LIGHT),
};

export const DarkTheme: Story = {
  args: {
    placeholder: "Input",
  },
  decorators: ThemeDecorator(Theme.DARK),
};
