import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("error value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "error",
      },
    };

    expect(getProfileError(state as StateSchema)).toBe("error");
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
