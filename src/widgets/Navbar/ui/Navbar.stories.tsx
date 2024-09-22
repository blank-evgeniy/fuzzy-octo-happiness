import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widget/Navbar",

  component: Navbar,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: ThemeDecorator(Theme.LIGHT) };

export const Dark: Story = { decorators: ThemeDecorator(Theme.DARK) };
