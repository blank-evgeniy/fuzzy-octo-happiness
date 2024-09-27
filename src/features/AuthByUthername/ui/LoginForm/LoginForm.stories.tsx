import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
  title: "features/LoginForm",

  component: LoginForm,

  parameters: {},

  tags: ["autodocs"],

  decorators: [
    StoreDecorator({ loginForm: { username: "123", password: "123" } }),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ loginForm: { username: "123", password: "123" } }),
  ],
};

export const WithError: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: {
        username: "123",
        password: "123",
        error: "You entered an incorrect username or password",
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: { username: "123", password: "123" },
    }),
  ],
};
