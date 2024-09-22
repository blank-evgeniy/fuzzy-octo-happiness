import type { Meta, StoryObj } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/NotFoundPage",

  component: NotFoundPage,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = { decorators: ThemeDecorator(Theme.LIGHT) };

export const Dark: Story = { decorators: ThemeDecorator(Theme.DARK) };
