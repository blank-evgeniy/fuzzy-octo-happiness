import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading", () => {
  test("isLoading value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
