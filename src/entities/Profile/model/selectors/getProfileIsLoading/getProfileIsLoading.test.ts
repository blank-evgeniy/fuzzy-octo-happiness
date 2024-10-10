import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
  test("is loading", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
