import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe("getProfileData", () => {
  const data = {
    username: "test",
    firstname: "test",
    lastname: "test",
    age: 20,
    city: "test",
    country: Country.Russia,
    currency: Currency.RUB,
  };

  test("data value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
