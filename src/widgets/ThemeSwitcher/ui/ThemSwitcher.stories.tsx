import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/ThemeSwitcher",

  component: ThemeSwitcher,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: ThemeDecorator(Theme.LIGHT) };

export const Dark: Story = { decorators: ThemeDecorator(Theme.DARK) };
