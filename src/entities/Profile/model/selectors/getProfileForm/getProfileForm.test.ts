import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  const data = {
    username: "test",
    firstname: "test",
    lastname: "test",
    age: 20,
    city: "test",
    country: Country.Russia,
    currency: Currency.RUB,
  };

  test("form data value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
