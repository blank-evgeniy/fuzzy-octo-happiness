import type { Meta, StoryObj } from "@storybook/react";
import PageError from "./PageError";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widget/PageError",

  component: PageError,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: ThemeDecorator(Theme.LIGHT) };

export const Dark: Story = { decorators: ThemeDecorator(Theme.DARK) };
