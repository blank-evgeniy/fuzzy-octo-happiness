import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",

  component: Modal,

  parameters: {},

  tags: ["autodocs"],

  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde aut recusandae ipsam rerum, voluptas voluptates atque ad error dolorem saepe? Ipsam quaerat accusantium quis, ea ut est quo deserunt!",
  },
  decorators: ThemeDecorator(Theme.LIGHT),
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde aut recusandae ipsam rerum, voluptas voluptates atque ad error dolorem saepe? Ipsam quaerat accusantium quis, ea ut est quo deserunt!",
  },
  decorators: ThemeDecorator(Theme.DARK),
};
