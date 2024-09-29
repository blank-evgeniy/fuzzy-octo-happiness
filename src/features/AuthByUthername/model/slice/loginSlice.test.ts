import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/login";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "10",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("test"))
    ).toEqual({
      username: "test",
    });
  });

  test("set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "10",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("test"))
    ).toEqual({
      password: "test",
    });
  });
});
