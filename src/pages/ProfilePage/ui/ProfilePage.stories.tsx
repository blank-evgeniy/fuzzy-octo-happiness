import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import Image from "shared/assets/tests/storybook.jpg";

const meta = {
  title: "pages/ProfilePage",

  component: ProfilePage,

  parameters: {},

  tags: ["autodocs"],
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};
