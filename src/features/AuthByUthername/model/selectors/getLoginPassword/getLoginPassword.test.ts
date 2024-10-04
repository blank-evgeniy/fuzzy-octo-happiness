import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("Password value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: "test" },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual("test");
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
