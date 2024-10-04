import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
  test("Username value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: "test" },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual("test");
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
