import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import Image from "shared/assets/tests/storybook.jpg";

const meta = {
  title: "enteties/ProfileCard",

  component: ProfileCard,

  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
  args: {
    readonly: true,
    data: {
      username: "test",
      firstname: "test",
      lastname: "test",
      age: 20,
      city: "test",
      country: Country.Russia,
      currency: Currency.RUB,
      avatar: Image,
    },
  },
};

export const Edit: Story = {
  args: {
    data: {
      username: "test",
      firstname: "test",
      lastname: "test",
      age: 20,
      city: "test",
      country: Country.Russia,
      currency: Currency.RUB,
      avatar: Image,
    },
  },
};

export const WithError: Story = {
  args: {
    error: "error",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
