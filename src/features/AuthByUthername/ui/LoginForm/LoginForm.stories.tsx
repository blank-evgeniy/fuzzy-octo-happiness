import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";

const meta = {
  title: "features/LoginForm",

  component: LoginForm,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  decorators: ThemeDecorator(Theme.LIGHT),
};

export const DarkTheme: Story = {
  decorators: ThemeDecorator(Theme.DARK),
};
