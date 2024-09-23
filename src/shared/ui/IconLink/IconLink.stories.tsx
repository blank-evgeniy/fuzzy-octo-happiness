import type { Meta, StoryObj } from "@storybook/react";
import Icon from "shared/assets/icons/main-link.svg";
import IconLink from "./IconLink";

const meta = {
  title: "shared/IconLink",

  component: IconLink,

  parameters: {},

  tags: ["autodocs"],

  argTypes: {
    children: { control: "text" },
  },

  args: { to: "/" },
} satisfies Meta<typeof IconLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Icon />,
    children: "Link",
  },
};
