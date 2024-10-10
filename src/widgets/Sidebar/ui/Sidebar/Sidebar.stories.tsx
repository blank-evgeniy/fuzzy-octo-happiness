import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta = {
  title: "widget/Sidebar",

  component: Sidebar,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
  ],
};

export const NoAuth: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: {} })],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
};
