import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
  title: "widget/Navbar",

  component: Navbar,

  parameters: {},

  decorators: [StoreDecorator({})],

  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
